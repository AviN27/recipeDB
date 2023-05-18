import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navibar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>RECPIES.</h1>

        <ul className='hidden md:flex'>
            <li className='p-4'>About</li>
            <li className='p-4'>Settings</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            <AiOutlineMenu size={20}/>
        </div>
        <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#00df9a] text-black ease-in-out duration-300' :'fixed right-[-100%] ease-in-out duration-300'}>
            <div className='p-4 align-middle ease-in-out duration-300' onClick={handleNav}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineClose size={20}/>} 
            </div>
            <ul className='p-4'>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 border-b border-b-gray-600'>Settings</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navibar