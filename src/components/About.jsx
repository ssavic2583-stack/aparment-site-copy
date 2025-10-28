import React from 'react'
import { assets } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'
import { motion } from "framer-motion" 


const About = () => {
 const { theme, toggleTheme } = useTheme();

  return (
    <motion.div 
      key={theme}
      initial={{ x: +100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    className='bg-stone-200 dark:dark:bg-zinc-800 dark:text-white'>
    <div className=' flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-3xl sm:text-4x1 font-luxury mb-2'>About <span className='font-bold'>Our Brand</span></h1>
      <p className='font-basic text-gray-500 max-w-80 text-center mb-8 '>Modern and comfortable apartment designed for simplicity and relaxation.
      Located in a quiet area, it offers everything needed for a pleasant stay.</p>
      <div className=' font-basic flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2x1:pr-28'>
            <div>
              <p className='text-4x1 font-medium text-gray-800'>1pm</p>
              <p>Check in</p>
            </div>
            <div>
              <p className='text-4x1 font-medium text-gray-800'>11am</p>
              <p>Check out</p>
            </div>
            <div>
              <p className='text-4x1 font-medium text-gray-800'>2</p>
              <p>Beds</p>
            </div>
            <div>
              <p className='text-4x1 font-medium text-gray-800'>117 B</p>
              <p>Karadjordjeva</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Fully equipped kitchen, fast Wi-Fi, and some extra perks if needed. Ideal for short visits or longer stays.</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default About