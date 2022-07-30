import Navbar from './components/layouts/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/layouts/Footer'
import Projects from './components/Projects'

// Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
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
