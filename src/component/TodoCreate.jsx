import React, { useState } from 'react'

function TodoCreate({createTodo}) {

    const [title, setTitle ] = useState('');

    const handleSubmitAddTodo = (e) => {
        e.preventDefault()

        if(!title.trim()) {
            return setTitle("")
        }
        createTodo(title)
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className='overflow-hidden rounded-md bg-white py-4 flex items-center px-4 gap-4 dark:bg-gray-800'
        >
            <span className='rounded-full border-2 w-5 h-5 inline-block '></span>
            <input 
               type="text" 
               placeholder='ingresa todo' 
               className='w-full text-gray-600 outline-none dark:bg-gray-800' 
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}

export default TodoCreate;
