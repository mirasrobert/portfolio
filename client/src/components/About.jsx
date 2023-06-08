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
            I am a skilled Web developer and programmer with a passion for
            creating web applications and utilizing programming to solve
            problems. I possess excellent technical abilities and have a strong
            foundation in data structures, algorithms, and programming. My
            expertise lies in using algorithms and programming to address
            various challenges and effectively communicating complex concepts to
            non-technical individuals. I have the versatility to deliver
            high-performing software solutions across different industries.
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
              Here are a few technologies I’ve been working with recently:
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
                <i className='fas fa-database'></i>
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
                <i className='fab fa-vuejs'></i>
                <p className='text-gray-600 skill-text'>VueJS</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-node'></i>
                <p className='text-gray-600 skill-text'>NodeJS</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-python'></i>
                <p className='text-gray-600 skill-text'>Django</p>
              </li>
              <li className='skill-item'>
                <i className='fab fa-git-alt'></i>
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
