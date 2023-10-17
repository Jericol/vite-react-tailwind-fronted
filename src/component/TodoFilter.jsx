import React from 'react'

function TodoFilter({ changeFilter, filter }) {
    return (
        <section className='container mx-auto px-4 mt-8'>
            <div className='flex justify-center gap-4 bg-white dark:bg-gray-800 px-4 py-4 rounded-md dark:text-white'>
                <button className={`${filter === 'all'
                    ? 'text-blue-500 hover:text-gray-600'
                    :
                    'text-gray-400 hover:text-blue-500'}`}
                    onClick={() => changeFilter("all")}
                >
                    all
                </button>
                <button className={`${filter === 'active'
                    ? 'text-blue-500 hover:text-gray-600'
                    :
                    'text-gray-400 hover:text-blue-500'}`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button className={`${filter === 'completed'
                    ? 'text-blue-500 hover:text-gray-600'
                    :
                    'text-gray-400 hover:text-blue-500'}`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TodoFilter
