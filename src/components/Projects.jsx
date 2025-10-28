import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { useTheme } from '../context/ThemeContext'
import { motion } from "framer-motion" 


const Projects = () => {

  const { theme, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
  const updateCardsToShow = () =>{
    if(window.innerWidth >= 1024){
      setCardsToShow(projectsData.length)
    }
    else{
      setCardsToShow(1)
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return ()=> window.remuveEventListener('resize', updateCardsToShow);
  }
  },[])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  const previousProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }



  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
     className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32  w-full overflow-hidden' id='Extra'>
      <h1 className='font-luxury font-boldtext-2x1 sm:text-4xl font-bold mb-2 text-center dark:force-color'>Extra <span>perks</span></h1>
      <p className='font-basic pb-6 text-center force-color mb-8 max-w-80 mx-auto'>For your benefit</p>


      {/* slider buttons */}

      {/* <div className='flex justify-end items-center mb-8'>
        <button onClick={previousProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previos Project'>
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div> */}

      {/* project slider container */}

       <div className='overflow-hidden'>
        <div className='flex gap-8'>
        {projectsData.map((project, index) => (
            <div key={index} className='relative flex flex-shrink-0 w-full sm:w-1/3'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-x1 font-semibold force-color'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div> 
    </motion.div>
  )
}

export default Projects



        {/* <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
        style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}$)`}}>
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-x1 font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}