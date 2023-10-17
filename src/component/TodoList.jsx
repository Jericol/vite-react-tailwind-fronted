import React from 'react'
import CrossIcon from './icon/IconCross'
import TodoItem from './TodoItem'

function TodoList({todos, removeTodo, updateTodo}) {
    return (
        <div className='rounded-t-md bg-white dark:bg-gray-800  [&>article]:p-4 mt-8'>
           {
             todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem  todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
             ))
           }
        </div>
    )
}

export default TodoList
