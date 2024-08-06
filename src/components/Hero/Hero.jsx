import { IoIosArrowForward } from "react-icons/io"
import NavBar from "../Navbar/NavBar"
import Blob from '../../assets/blob.svg'
import HeroImg from '../../assets/images/hero.png'


const Hero = () => {
  return (
    <section className=" bg-light overflow-hidden relative">
        <NavBar />
        <div className=" container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            <div className=" flex flex-col justify-center py-14 md:py-0 relative z-20">
                <div className=" text-center md:text-left space-y-10 lg:max-w-[400px]">
                    <h1 className=" text-3xl lg:text-5xl font-bold !leading-snug">
                        Let's Learn to build a <span className=" text-secondary">Website</span> for your business
                    </h1>
                    <div className=" flex justify-center md:justify-start">
                        <button className=" primaryBtn flex items-center gap-2 group">
                            Get Started <IoIosArrowForward className=" text-xl group-hover:translate-x-2 group-hover:rotate-45 duration-300" />
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <img src={HeroImg} alt="" className=" w-[400px] xl:w-[600px] relative z-10 drop-shadow-xl" />
                <img src={Blob} alt=""  className=" absolute -bottom-15 w-[800px] md:w-[1500px] z-[1] hidden md:block"/>
            </div>
        </div>
    </section>
  )
}

export default Hero