import { useEffect } from 'react'

import Navbar from './components/layouts/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/layouts/Footer'
import Projects from './components/Projects'

// Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 500,
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className='container px-5 mx-auto'>
        <Hero />
      </div>

      <About />
      <Projects />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
