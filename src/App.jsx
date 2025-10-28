import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Foother from './components/Foother'
import Map from './components/Map'


const App = () => {
  return (

      <ThemeProvider>
        <div>
        <Header />
        <Map />
        <div className='border-t border-gray-700'></div>
        <Contact />
        <div className='border-t border-gray-700 mx-20'></div>        
        <About /> 
        <div className='border-t border-gray-700 mx-20'></div>
        <Projects /> 
        {/* <Testimonials /> */}
        <Foother />
        </div>
      </ThemeProvider>
  )
}

export default App
