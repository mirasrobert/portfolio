const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <footer className='bg-violet-700 text-white'>
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
