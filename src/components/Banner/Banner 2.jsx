import Banner2Img from '../../assets/images/banner.png';
import { motion } from 'framer-motion';

const Banner2 = () => {
    return (
      <section>
        <div className=" container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            <motion.div initial={{ opacity:0, x: -50 }} whileInView={{ opacity:1, x:0 }} className=' flex flex-col justify-content'>
                <div className=' text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <h1 className=' text-4xl font-bold !leading-snug'>
                        Join Our Community to Start your Journey
                    </h1>
                    <p className=' text-dark2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facere animi, 
                        nobis dolor fuga delectus repudiandae repellat! Ab magnam rem quaerat cumque alias. 
                        Tempore repellendus corporis facere error! Autem, porro.
                    </p>
                    <a href="/" className=' primaryBtn !mt-8'>
                        Join Now
                    </a>
                </div>
            </motion.div>
            <div className=' flex justify-center items-center'>
                  <motion.img initial={{ x: 50, opacity: 0}} whileInView={{ x: 0, opacity: 1}} 
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                      src={Banner2Img} alt="" className=' w-[350px] md:max-w-[450px] object-cover drop-shadow' />
            </div>
        </div>
      </section>
    )
  }
  
  export default Banner2