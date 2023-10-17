import { useEffect, useState } from 'react'
import './App.css'
import Fondo from '../public/images/bg-mobile-light.jpg';
import Header from './component/Header';
import TodoCreate from './component/TodoCreate';
import TodoList from './component/TodoList';
import TodoFilter from './component/TodoFilter';
import TodoComputed from './component/TodoComputed';

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []

function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const removeTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const updateTodo = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )))
    }

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length

    const checkCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    const [filter, setFilter] = useState("all");

    const changeFilter = filter => setFilter(filter)

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default: return todos
        }
    }
    return (
        <div className=''>
            <div className='min-h-screen bg-gray-300 dark:bg-gray-900 bg-no-repeat bg-contain' 
                style={{   backgroundImage: `url(${Fondo})` }} 
            >
                {/* Header */}
                <Header />

                <main className='container mx-auto px-4 mt-8'>
                    {/* TodoCreate */}
                    <TodoCreate createTodo={createTodo} />
                    {/* TodoList (TodoItem) TodoUpdate & TodoDelete */}
                    <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
                    {/* TodoComputed */}
                    <TodoComputed computedItemsLeft={computedItemsLeft} checkCompleted={checkCompleted} />
                    {/* TodoFilter */}
                    <TodoFilter changeFilter={changeFilter} filter={filter}/>

                </main>


                <section className='container mx-auto mt-8 px-4 text-center dark:text-gray-400'>
                    Drag or drop order list
                </section>
            </div>
        </div>
    )
}



export default App
