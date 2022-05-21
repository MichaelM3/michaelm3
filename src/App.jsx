import { useEffect, useState } from 'react'
import './App.css'
import { MoonIcon} from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'
import DemoContainer from './components/DemoContainer'

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const theme = localStorage.theme || null
    if (theme) {
      setTheme(theme)
    } else {
      // If no preference in local storage, check the users browser preffered theme
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        localStorage.theme = "dark"
      }
    }

  }, [])
  
  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light")
      localStorage.theme = "light"
    } else {
      setTheme("dark")
      localStorage.theme = "dark"
    }
  }

  return (
    <div className={theme}>
      <div className="flex flex-col items-center dark:bg-slate-800 h-screen p-6 overflow-auto">
        <header className='flex flex-col items-center space-y-6'>
          <span className='flex'>
            <h1 className='text-black dark:text-slate-200 text-5xl'>Michael Muniz</h1>
            {theme === "light" ?
              <SunIcon onClick={handleClick} className='w-12 h-12 absolute right-12 hover:cursor-pointer'/>
              :
              <MoonIcon onClick={handleClick} className='w-12 h-12 absolute right-12 hover:cursor-pointer' />
            }
          </span>
          <p className='dark:text-white w-1/3'>
            Hello and welcome to my personal portfolio! My name is Michael Muniz and I'm
            a Full Stack Developer from New York City and new to Hamilton Ontario. I 
            specialize in writing back end apis with Ruby on Rails, and front ends with 
            React.js
          </p>
          <img src='src/me.jpg' alt='Picture of Michael' className='rounded-full w-2/12' /> 
        </header>
        <hr className='w-full border-black dark:border-white my-9'/>
        <DemoContainer />
      </div>
    </div>
  )
}

export default App
