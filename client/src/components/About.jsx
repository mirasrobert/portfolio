const About = () => {
  return (
    <section
      id='about-section'
      className='bg-violet-700 text-white w-full text-center py-12 px-12 relative'>
      <div className='my-20'>
        <h1 className='text-3xl font-bold mb-5'>
          Hi, I’m Robert Miras. Nice to meet you.
        </h1>
        <div className='flex justify-center'>
          <h2 className='text-base w-full md:w-9/12	lg:w-6/12  font-normal leading-7'>
            Since the beginning of my journey, I build new projects just to
            tickle my brain and I spend a large amount of my free time exploring
            the latest technology advancements in web development world. I treat
            programming not only a type of profession or hobby, but programming
            brings happiness when I'm creating applications that can help. Apart
            from being a web developer, I enjoy most of my time being outdoors.
            I was a choir member and I love to sing. It makes me feel relax
            especially after long hours of facing computer.
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
            <p className='text-gray-600'>
              I love doing front-end also but usually I explore back-end
              technology because it's a lot of fun for me, it shows how web
              functions especially with primary focus on{' '}
              <span className='italic'>PHP + Laravel</span>
            </p>

            <ul className='skills-icons flex justify-center items-center space-x-2 md:space-x-8'>
              <li className='skill-item'>
                <i className='fab fa-html5'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-css3'></i>
              </li>

              <li className='skill-item'>
                <i className='fab fa-php'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-laravel'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-js-square'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-react'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-node'></i>
              </li>
              <li className='skill-item'>
                <i className='fab fa-git'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
