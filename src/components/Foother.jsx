import React from 'react'
import { assets } from '../assets/assets'

const Foother = () => {
  return (
    <div className='pt-18 px-4 md:px-20 lg:px-32 bg-zinc-900 w-full overflow-hidden' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <img src={assets.logo} alt='' className="h-10 w-auto"/>
          <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Dolorem distinctio odio porro
              similique quis ab quaerat dicta commodi necessitatibus
             </p>

        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href='#Header' className='hover:text-white'>Home</a>
            <a href='#About' className='hover:text-white'>About us</a>
            <a href='#Contact' className='hover:text-white'>contact us</a>
            <a href='#Header' className='hover:text-white'>Privacy policy</a>
          </ul>
        </div>
        {/* <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <p className='text-gray-400 mb-4 max-w-80'></p>
        </div> */}
      </div>
      <div className=' border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 © . All Right Reserved.
      </div>
    </div>
  )
}

export default Foother