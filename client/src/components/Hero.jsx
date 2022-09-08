import coding from '../img/coding.png'

const Hero = () => {
  return (
    <>
      <div className='hero-wrapper mt-5 md:mt-8 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h5 className='hero-caption font-bold text-center'>
            Hi, I am a Software Developer
            {/* Hi, I'm Aspiring To Be a Web Developer */}
          </h5>
          <p className='hero-subtitle-size text-gray-800 text-center'>
            My passion lies in solving real world problems with programming.
          </p>
          <img
            className='mt-8'
            width={450}
            height={450}
            src={coding}
            alt='Robert Miras'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
