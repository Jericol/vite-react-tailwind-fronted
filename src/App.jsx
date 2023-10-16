import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fondo from '../public/images/bg-mobile-light.jpg';
import CrossIcon from './component/CrossIcon';
import MoonIcon from './component/MoonIcon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <div className='min-h-screen bg-gray-300 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${Fondo})` }}
      >
        <header className='container mx-auto px-4 pt-8'>
          <div className='flex justify-between'>
            <h1 className='uppercase tracking-[1rem] text-white text-2xl font-semibold'>todo</h1>
            <button>
               <MoonIcon className='fill-red-500 '/>
            </button>
          </div>
          <form action="" className='overflow-hidden rounded-md bg-white py-4 flex items-center px-4 
              gap-4 mt-8'
          >
            <span className='rounded-full border-2 w-5 h-5 inline-block '></span>
            <input type="text" placeholder='ingresa todo' className='w-full text-gray-600 outline-none' />
          </form>
        </header>


        <main className='container mx-auto px-4 mt-8'>
          <div className='rounded-md bg-white [&>article]:p-4'>
            <article className='flex gap-4 border-b border-black'>
              <button className='flex-none rounded-full border-2 w-5 h-5 inline-block'></button>
              <p className='text-sm grow text-gray-600'>Complete online Javascript</p>
              <button className='flex-none'>
                 <CrossIcon />
              </button>
            </article>
            <article className='flex gap-4 border-b border-black'>
              <button className='flex-none rounded-full border-2 w-5 h-5 inline-block'></button>
              <p className='text-sm grow text-gray-600'>Complete online Javascript</p>
              <button className='flex-none'>
                 <CrossIcon />
              </button>
            </article>
            <article className='flex gap-4 border-b border-black'>
              <button className='flex-none rounded-full border-2 w-5 h-5 inline-block'></button>
              <p className='text-sm grow text-gray-600'>Complete online Javascript</p>
              <button className='flex-none'>
                 <CrossIcon />
              </button>
            </article>
            <section className='flex justify-between px-4 py-4 text-gray-400'>
              <span>5 items left</span>
              <button>Clear completed</button>
            </section>
          </div>
        </main>

        <section className='container mx-auto px-4 mt-8'>
          <div className='flex justify-center gap-4 bg-white px-4 py-4 rounded-md'>
            <button className='hover:text-blue-400 cursor-pointer'>all</button>
            <button className='hover:text-blue-400 cursor-pointer'>Active</button>
            <button className='hover:text-blue-400 cursor-pointer'>Completed</button>
          </div>
        </section>

        <section className='container mx-auto mt-8 px-4 text-center'>Drag or drop order list</section>
      </div>
    </div>
  )
}

export default App
