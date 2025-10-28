import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'
import { motion } from "framer-motion"
import SnakeBorderHeadline from './Animation'; 

const Header = () => {
  const { theme, toggleTheme } = useTheme();


  return (

    <div
      className="relative min-h-screen flex flex-col justify-center w-full overflow-hidden text-white"
      id="Header"
    >
      
      {/* Navbar fixed at top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      {/* Background video */}
      <video
        key={theme}
        autoPlay
        muted
        loop
        playsInline
        // className="absolute top-0 left-0 w-full h-full object-cover z-0">
         className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none">         
        <source src={theme === 'dark' ? assets.video_aparman_dark : assets.video_apartman} type="video/mp4" />
      </video>

      {console.log('Theme in Header:', theme)}

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[1]" />

      {/* Centered content */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 text-center mt-32">
         <SnakeBorderHeadline key={theme}/>
        <div className="space-x-6 mt-16">
          <a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition "
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  )
}



export default Header
