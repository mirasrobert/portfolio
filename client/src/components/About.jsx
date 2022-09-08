const About = () => {
  return (
    <section
      id='about-section'
      className='bg-violet-700 text-white w-full text-center py-12 px-12 relative'>
      <div className='my-20' data-aos='fade-up'>
        <h1 className='text-3xl font-bold mb-5'>
          Hi, I’m Robert Miras. Nice to meet you.
        </h1>
        <div className='flex justify-center'>
          <h2 className='w-full md:w-9/12	lg:w-6/12 about-me'>
            Since I started my journey, I've developed numerous projects purely
            for fun, and I now devote a large percentage of my free time
            studying the most recent technological developments in the web
            development industry. I don't just view programming as a job or a
            hobby; when I make applications that can be useful, it makes me
            happy. I also spend my time outside apart from being a developer. I
            love to sing and I used to be in a chorus. I feel relieved,
            especially after spending so much time in front of a computer.
          </h2>
        </div>
      </div>

      {/* CARD */}
      <div className='container md:px-24 mx-auto'>
        <div className='w-full py-14 md:py-16 px-8 bg-white shadow-lg rounded-lg skills-card'>
          <div className='w-full h-full'>
            <h2 className='text-gray-800 text-3xl font-semibold hero-text-color'>
              SKILLS
            </h2>
            <p className='font-light font-sm text-black mb-3'>
              PROGRAMMING LANGUAGES & TOOLS
            </p>
            <p className='text-gray-600 about-me'>
              I enjoy doing front-end work as well, but I prefer to focus on
              back-end technology because it demonstrates how the web functions
              under the hood, particularly with a focus on{' '}
              <span className='italic'>PHP + Laravel</span>
            </p>

            <ul className='skills-icons flex justify-center items-center space-x-2 md:space-x-8'>
              <li className='skill-item'>
                <i className='fab fa-html5'></i>
                <p className='text-gray-600 skill-text'>HTML5</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-css3'></i>
                <p className='text-gray-600 skill-text'>CSS</p>
              </li>

              <li className='skill-item'>
                <i className='fab fa-php'></i>
                <p className='text-gray-600 skill-text'>PHP</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-laravel'></i>
                <p className='text-gray-600 skill-text'>Laravel</p>
              </li>
              <li className='skill-item'>
                <i class='fas fa-database'></i>
                <p className='text-gray-600 skill-text'>Database</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-js-square'></i>
                <p className='text-gray-600 skill-text'>Javascript</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-react'></i>
                <p className='text-gray-600 skill-text'>ReactJS</p>
              </li>
              <li className='skill-item'>
                <i class='fab fa-vuejs'></i>
                <p className='text-gray-600 skill-text'>VueJS</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-node'></i>
                <p className='text-gray-600 skill-text'>NodeJS</p>
              </li>
              <li className='skill-item'>
                <i class='fab fa-python'></i>
                <p className='text-gray-600 skill-text'>Django</p>
              </li>
              <li className='skill-item'>
                <i class='fab fa-git-alt'></i>
                <p className='text-gray-600 skill-text'>Git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
