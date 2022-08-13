import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Footer = () => {
  const [isClicked, seIsClicked] = useState(false)

  const d = new Date()
  const year = d.getFullYear()

  const onSubmit = (e) => {
    seIsClicked(true)
    e.preventDefault()

    // validate forms
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    if (name === '' || email === '' || message === '') {
      toast.error('Please fill all fields')
      return
    }

    const data = {
      name,
      sender: email,
      message,
    }

    axios
      .post('https://robertmiras.herokuapp.com/api/contact', data)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })

    seIsClicked(false)

    // Clear Form
    e.target.reset()
  }

  return (
    <footer className='bg-violet-700 text-white' id='footer-contact'>
      <div className='mx-auto text-center pt-10 pb-10 px-4'>
        <h1 className='font-bold text-white'>Contact Me</h1>
        <p className='hero-subtitle-size contact-subtitle'>
          Want to discuss a project or just chat? Feel free to contact me.
        </p>
      </div>

      {/* Create a contact form */}
      <div className='container px-5 mx-auto sm:w-100 md:w-1/2'>
        <div className='bg-white rounded-md shadow-md p-5'>
          <form onSubmit={onSubmit} method='POST'>
            <label className='block mb-6'>
              <span className='block text-gray-700 text-sm font-medium'>
                Name
              </span>

              <input
                type='text'
                name='name'
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-gray-700 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
            </label>

            <label className='block mb-6'>
              <span className='block text-gray-700 text-sm font-medium'>
                Email
              </span>

              <input
                type='email'
                name='email'
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-gray-700 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
            </label>
            <label className='block mb-6'>
              <span className='block text-gray-700 text-sm font-medium'>
                Message
              </span>

              <textarea
                name='message'
                rows={4}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-gray-700 text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'></textarea>
            </label>

            <div className='flex items-center justify-between'>
              <button
                disabled={isClicked}
                type='submit'
                className='bg-sky-600 hover:bg-sky-700 px-5 py-2 focus:ring-sky-500 rounded-full text-sm hover:cursor-pointer'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='container px-5 mx-auto py-8 text-center'>
        <h5 className='text-lg italic text-slate-300'>
          "Coding everyday keeps the bug away."
        </h5>
        <p className='mt-2 font-light text-white'>
          Get in touch with me: <strong>mrmirasrobert@gmail.com</strong> or my
          social links below
        </p>
        <ul className='skills-icons flex justify-center items-center space-x-2 md:space-x-8 list-none'>
          <a
            href='https://www.linkedin.com/in/robert-miras/'
            target='_blank'
            rel='noreferrer'>
            <li className='border border-white px-3 py-2 rounded-full text-4xl text-white hover:bg-white hover:text-violet-700'>
              <i className='fab fa-linkedin-in'></i>
            </li>
          </a>
          <a
            href='https://web.facebook.com/MirasRobert'
            target='_blank'
            rel='noreferrer'>
            <li className='border border-white px-3 py-2 rounded-full text-4xl text-white hover:bg-white hover:text-violet-700'>
              <i className='fab fa-facebook'></i>
            </li>
          </a>
          <a
            href='https://www.instagram.com/robertmiras/'
            target='_blank'
            rel='noreferrer'>
            <li className='border border-white px-3 py-2 rounded-full text-4xl text-white hover:bg-white hover:text-violet-700'>
              <i className='fab fa-instagram'></i>
            </li>
          </a>
          <a
            href='http://github.com/mirasrobert'
            target='_blank'
            rel='noreferrer'>
            <li className='border border-white px-3 py-2 rounded-full text-4xl text-white hover:bg-white hover:text-violet-700'>
              <i className='fab fa-github'></i>
            </li>
          </a>
        </ul>

        <p className='text-white mt-8'>Copyright &copy; {year}, Robert Miras</p>
      </div>
    </footer>
  )
}

export default Footer
