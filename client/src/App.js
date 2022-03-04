import Navbar from './components/layouts/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/layouts/Footer'
import Projects from './components/Projects'

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
    </>
  )
}

export default App
