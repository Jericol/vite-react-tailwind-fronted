import React from 'react'

function TodoComputed({computedItemsLeft, checkCompleted}) {
    return (
        <section className='flex justify-between rounded-b-md px-4 py-4 text-gray-400 bg-white dark:bg-gray-800'>
            <span>{computedItemsLeft} items left</span>
            <button onClick={checkCompleted}> Clear completed</button>
        </section>
    )
}

export default TodoComputed
