import React, { useEffect, useState } from 'react';
import Fondo from '../../public/images/bg-mobile-light.jpg';
import MoonIcon from './icon/IconMoon';
import IconSon from './icon/IconSun';

const initialStateDarkmode = localStorage.getItem("theme") === "dark";

function Header() {

  const [darkmode, setDarkmode ] = useState(initialStateDarkmode);

  useEffect(() => {
      if (darkmode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }

  }, [darkmode])

 
    return (
        <header className='container mx-auto px-4 pt-8'>
          <div className='flex justify-between'>
            <h1 className='uppercase tracking-[1rem] text-white text-2xl font-semibold'>todo</h1>
            <button onClick={() => setDarkmode(!darkmode)}>
              {
                darkmode ? <MoonIcon /> : <IconSon />
              }
            </button>
          </div>
        </header>
    )
}

export default Header
