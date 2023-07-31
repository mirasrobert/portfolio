import psbc from '../img/psbc_website_screenshot.PNG'
import githubfinder from '../img/github_finder_website_screenshot.PNG'
import socialite from '../img/SOCIALITE_SCREENSHOT.PNG'
import housemarketplace from '../img/house_marketplace_screenshot.PNG'
import pet_classifier from '../img/pet_classifier_screenshot.png'
import IGClone from '../img/Instagram_Profile_Screenshot.png'
import OnlineShop from '../img/MEWTRON_SCREENSHOT.png'

//import axios from 'axios'
//import fileDownload from 'js-file-download'

/* THIS IS A DOWNLOAD RESUME FROM SERVER
const BASE_URL = 'https://robertmiras-portfolio.onrender.com'
const downloadLink = `${BASE_URL}/download-resume`
*/

const Projects = () => {
  /*
  const downloadResumeHandler = async (e) => {
    e.preventDefault()

    const response = await axios.get(downloadLink, {
      responseType: 'blob',
    })

    fileDownload(response.data, 'resume.pdf') // Download File
  }
  */

  return (
    <section
      id='projects-section'
      className='projects-section py-24 md:py-20 text-center'>
      <div className='mb-10 md:mb-20 px-4 md:px-0'>
        <h1 className='font-bold hero-text-color'>My Projects</h1>
        <p className='hero-subtitle-size'>
          Here are a few personal projects I've worked on recently. Want to get
          my CV?{' '}
          {/* <a
            onClick={downloadResumeHandler}
            className='text-violet-600'
            href='#!'>
            Download
            <i className='ml-1 fas fa-cloud-download-alt'></i>
          </a> */}
          <a
            className='text-violet-600'
            href='https://drive.google.com/file/d/1R18DLEOPchsj1h_uc7Gsq79y4N6Nwwn0/view?usp=sharing'
            target={'_blank'}
            rel='noreferrer'>
            Download
            <i className='ml-1 fas fa-cloud-download-alt'></i>
          </a>
        </p>
      </div>

      <div className='container mx-auto px-5' data-aos='fade-up'>
        <p className='block md:hidden italic text-sm mb-4'>
          "Tap & Hold images to show details for mobile devices"
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={psbc}
              alt='psbc'
            />

            <div className='project-caption text-white'>
              <p>
                Enrollment & Portal Website of Paete Science and Business
                College, Inc), a private school in Paete, Laguna.
              </p>
              <small className='font-sm text-violet-500'>
                {/* Tools: PHP, Laravel, MySQL, JavaScript, HTML, CSS, Bootstrap, */}
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://iampsbc.com/'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={githubfinder}
              alt='githubfinder'
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
                  href='https://githubfinder.cf/'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a>

                <a
                  href='https://github.com/mirasrobert/github-finder'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={OnlineShop}
              alt='mewtron'
            />

            <div className='project-caption text-white'>
              <p>
                Online store with PayPal/Card payment integration and guest user
                shopping.
              </p>

              <small className='font-sm text-violet-500'>
                Tools: PHP, Laravel, MySQL, JavaScript, HTML, CSS, Bootstrap,
              </small>

              <div className='flex space-x-3'>
                {/* <a
                  href='https://www.mewtronshop.ml/'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-eye'></i> Demo
                </a> */}

                <a
                  href='https://github.com/mirasrobert/laravel8-ecommerce/'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={socialite}
              alt='socialite'
            />

            <div className='project-caption text-white'>
              <p>
                Social networking site with login, registration, profile, and a
                post feature.
              </p>

              <small className='font-sm text-violet-500'>
                Tools: MongoDB, Express, ReactJS, NodeJS, Bootstrap,
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://github.com/mirasrobert/socialite'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={housemarketplace}
              alt='housemarketplace'
            />

            <div className='project-caption text-white'>
              <p>A real-estate website built in Laravel & VueJS</p>

              <small className='font-sm text-violet-500'>
                Tools: MySQL, VueJS, Laravel, TailwindCSS
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://github.com/mirasrobert/laravue-realestate'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={pet_classifier}
              alt='pet_classifier'
            />

            <div className='project-caption text-white'>
              <p>
                Distinguish images of dogs and cats using Artificial
                Intelligence (ML)
              </p>
              <small className='font-sm text-violet-500'>
                Tools: Django, Python, Deep Learning & AI, TensorFlow
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://github.com/mirasrobert/django-pet-classification'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
                </a>
              </div>
            </div>
            <div className='overlay'></div>
          </div>

          <div className='project-card-items bg-white shadow-xl rounded-lg'>
            <img
              className='w-full h-full rounded-lg object-cover shadow-xl'
              src={IGClone}
              alt='IGClone'
            />

            <div className='project-caption text-white'>
              <p>Instagram Clone built using Laravel and VueJS with Vite.</p>
              <small className='font-sm text-violet-500'>
                Tools: PHP, Laravel, VueJS, TailwindCSS
              </small>

              <div className='flex space-x-3'>
                <a
                  href='https://github.com/mirasrobert/instagram-laravel'
                  target={'_blank'}
                  rel='noreferrer'
                  className='text-violet-700 border border-violet-700 bg-transparent rounded-full py-2 px-3 w-1/2 mx-auto mt-3 hover:text-white hover:bg-violet-700'>
                  <i className='fas fa-code'></i> Code
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
