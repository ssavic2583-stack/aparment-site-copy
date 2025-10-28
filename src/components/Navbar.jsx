import React, { useEffect, useState } from 'react'
import {Moon , Sun} from "lucide-react"
import { assets } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [showMobileMenu, setshowMobileMenu] = useState(false)


  useEffect(() => {
      if(showMobileMenu){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
      return ()=>{
        document.body.style.overflow = 'auto'
      }

  },[showMobileMenu]) 


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <button className='border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition'>En</button>
        {/* <img src={assets.logo} alt="" className="h-10 w-auto"/> */}
        <ul className='hidden md:flex gap-7 text-white font-basic'>
          <a href='#Header' className='cursor-pointer text-white hover:text-red-400'> Home</a>
          <a href='#Location' className='cursor-pointer hover:text-gray-400 '> Our Location</a>
          <a href='#About' className='cursor-pointe hover:text-gray-400'> About</a>
          <a href='#Extra' className='cursor-pointer hover:text-gray-400'> Extra perks</a>
        </ul>
        <button onClick={toggleTheme} className=' font-basic rounded-full border border-white p-2'>{theme === "light" ? <Moon /> : <Sun />}</button>
        <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
{/*--------- mobile-menu-------- */}
<div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 z-20 overflow-hidden  bg-white transition-all `}>
  <div className='flex justify-end p-6 cursor-pointer'>
    <img onClick={()=> setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt=""/>
  </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
    <a onClick={()=> setshowMobileMenu(false)} href='#Header' className='px-4 py2 rounded-full inline-block'>Home</a>
    <a onClick={()=> setshowMobileMenu(false)} href='#About' className='px-4 py2 rounded-full inline-block'>About</a>
    <a onClick={()=> setshowMobileMenu(false)} href='#Projects' className='px-4 py2 rounded-full inline-block'>Projects</a>
    <a onClick={()=> setshowMobileMenu(false)} href='#Location' className='px-4 py2 rounded-full inline-block'>Our Location</a>
  </ul>
</div>
    </div>
  )
}

export default Navbar
