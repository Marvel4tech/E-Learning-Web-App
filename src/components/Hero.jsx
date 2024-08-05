import heroImg from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section className=" max-xl:px-10 bg-light h-[78vh] max-w-6xl mx-auto flex justify-between items-center gap-10">
        <div className=''>
            <h1  className=' max-xl:text-3xl mb-10 text-5xl text-dark font-extrabold leading-snug'>
                Let's Learn to <br />Build a <span className=' text-secondary'>Website</span> <br /> for your business
            </h1>
            <button className=" primaryBtn">Get Started <span className=' ml-2'>→</span></button>
        </div>
        <div className=' flex'>
            <img src={heroImg} alt="heroImg" />
        </div>
    </section>
  )
}

export default Hero