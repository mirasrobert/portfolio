import axios from 'axios'
import fileDownload from 'js-file-download'

import psbc from '../img/psbc_website_screenshot.PNG'
import githubfinder from '../img/github_finder_website_screenshot.PNG'

const Projects = () => {
  const downloadResumeHandler = async (e) => {
    e.preventDefault()

    const response = await axios.get('/download-resume', {
      responseType: 'blob',
    })

    fileDownload(response.data, 'resume.pdf') // Download File
  }

  return (
    <section
      id='projects-section'
      className='projects-section py-24 md:py-20 text-center'>
      <div className='mb-10 md:mb-20 px-4 md:px-0'>
        <h1 className='text-2xl font-bold hero-text-color'>My Projects</h1>
        <p>
          Here are a few personal projects I've worked on recently. Want to get
          my CV?{' '}
          <a
            onClick={downloadResumeHandler}
            className='text-violet-600'
            href='#!'>
            Download
          </a>
        </p>
      </div>

      <div className='container mx-auto px-5'>
        <p className='block md:hidden italic text-sm mb-4'>
          "Tap & Hold images to show details for mobile devices"
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='project-card-items shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={githubfinder}
              alt='img'
            />

            <div className='project-caption text-white'>
              <p>
                Find or search GitHub profile with latest repositories,
                location, followers and etc.
              </p>

              <small className='font-sm text-violet-500'>
                Tools: Vue JS, Bootstrap CSS
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://github-finder-vue.herokuapp.com/'
                  target={'_blank'}
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a>

                <a
                  href='https://github-finder-vue.herokuapp.com/'
                  target={'_blank'}
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i class='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={psbc}
              alt='img'
            />

            <div className='project-caption text-white'>
              <p>
                Enrollment & Portal Website of Paete Science and Business
                College, Inc), a private school in Paete, Laguna.
              </p>
              <small className='font-sm text-violet-500'>
                Tools: PHP, Laravel, MySQL, JavaScript, HTML, CSS, Bootstrap,
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://iampsbc.com/'
                  target={'_blank'}
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src='https://raw.githubusercontent.com/mirasrobert/laravel8-ecommerce/main/public/img/WEBSITE_SCREENSHOT.png'
              alt='img'
            />

            <div className='project-caption text-white'>
              <p>
                Online store with paypal payments integration and guest user
                shopping.
              </p>

              <small className='font-sm text-violet-500'>
                Tools: PHP, Laravel, MySQL, JavaScript, HTML, CSS, Bootstrap,
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://mewtronshop.herokuapp.com/'
                  target={'_blank'}
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a>

                <a
                  href='https://github.com/mirasrobert/laravel8-ecommerce/'
                  target={'_blank'}
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i class='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
