import { useState, useEffect } from 'react'

const Navbar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleCollapseHandler = () => {
    setToggleCollapse(!toggleCollapse)
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth)
    })

    if (parseInt(windowWidth) < 767) {
      setToggleCollapse(true)
    } else {
      setToggleCollapse(false)
    }

    return () => {
      window.removeEventListener('resize', (e) => {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [windowWidth])

  return (
    <nav className='bg-white pb-4 pt-5'>
      <div className='container mx-auto px-5'>
        <div className='block md:flex justify-between items-center text-black'>
          <div className='logo flex justify-between md:block'>
            <h5 className='text-2xl font-bold text-gray-700 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-violet-600 mr-1 text-2xl'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z'
                  clipRule='evenodd'
                />
              </svg>
              <p>Robert M.</p>
            </h5>

            {/* Hamburger */}
            <button
              className='inline-block md:hidden'
              onClick={toggleCollapseHandler}>
              {toggleCollapse ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </button>
          </div>

          <div className='nav-links block md:flex items-center text-gray-800 hover:text-black text-md'>
            <div
              className={`${
                toggleCollapse ? 'h-0 hidden' : 'h-auto'
              } md:space-x-5`}>
              <a
                className='text-sm block my-3 md:my-0 md:inline-block text-lg hover:text-violet-700'
                href='#about-section'>
                About
              </a>
              <a
                href='#projects-section'
                className='bg-transparent border border-violet-700 border-2 text-violet-700 px-4 py-2 focus:outline-none focus:border-violet-100 focus:ring-violet-100 focus:ring focus:ring-violet-500 rounded-full hover:bg-violet-600 hover:text-white'>
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
