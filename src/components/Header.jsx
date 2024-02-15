import React from 'react'
import {MdNightsStay,MdWbSunny}  from 'react-icons/md'
import 'tailwindcss/tailwind.css';
import { Link } from 'react-scroll';

function Header({darkMode,setDarkMode,scrollTo}) {
    const handleDarkMode=()=>{
        setDarkMode((prev)=>!prev)
    }


  return (
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white '>
        <nav className='flex justify-between  items-center p-5 w-screen'>
            <h3 className='flex font-bold ms-8 '>Portfolio</h3>
        <div className='flex justify-evenly gap-x-6 '>
                
                <Link className='cursor-pointer font-bold py-2' to="home" smooth={true} duration={800} onClick={() => scrollTo("home")}>
                Home
            </Link>
                <Link className='cursor-pointer font-bold py-2' to="about" smooth={true} duration={800} onClick={() => scrollTo("about")}>
                About
            </Link>
                <Link className='cursor-pointer font-bold py-2' to="projects" smooth={true} duration={800} onClick={() => scrollTo("projects")}>
                Projects
            </Link>
                <Link className='cursor-pointer font-bold py-2' to="contact" smooth={true} duration={800} onClick={() => scrollTo("contact")}>
                Contact
            </Link>
            <a href="https://www.linkedin.com/in/akash-es-a3a174239/" target='_blank' className=" text-white py-2 flex justify-center items-center bg-gradient-to-r from-red-500 to-red-900 rounded-lg px-4 hover:shadow-2xl hover:translate-y-1 transition duration-300 ease-in-out" >Connect <i class="fa-solid fa-plus"></i></a>

            </div>
            <div className='flex me-8 ' onClick={handleDarkMode} >
                {
                    darkMode ?                  <MdWbSunny  className='text-2xl cursor-pointer' />
:                 <MdNightsStay  className='text-2xl cursor-pointer' />

                }

            </div>
           
        </nav>
    </header>
  
  )
}

export default Header
