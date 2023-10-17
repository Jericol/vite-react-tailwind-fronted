import React from 'react'
import CrossIcon from './icon/IconCross'
import Check from './icon/IconCheck'

function TodoItem({todo, removeTodo, updateTodo}) {

    const {id, title, completed } = todo;



    return (
        <article className='flex gap-4 border-b border-black px-4 py-4'>
            {/* <button className='flex-none rounded-full border-2 w-5 h-5 inline-block'>
            </button> */}
            <button className={`w-5 h-5 flex-none rounded-full ${completed ? 'border-2 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 grid place-content-center' 
              : 
              'border-2 inline-block'}`}
              onClick={() => updateTodo(id)}
            >
               {completed && <Check />}
            </button>
            <p className={`text-sm grow text-gray-600 dark:text-slate-200 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className='flex-none' onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem;
