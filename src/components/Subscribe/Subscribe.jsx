import { FaBell } from 'react-icons/fa'
import BgImg from '../../assets/images/background.png'
import { motion } from 'framer-motion'

const bgStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const Subscribe = () => {
  return (
    <section className=' bg-[#f7f7f7' style={bgStyle}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className=' container py-24 md:py-28' >
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale:1 }} 
            transition={{ duration: 0.6, ease: "easeInOut" }} className=' flex flex-col justify-center'>
                <div className=' text-center space-y-4 lg:max-w-[430px] mx-auto'>
                    <h1 className=' text-4xl font-bold !leading-snug'>450K+ Students are learning from us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, 
                        corporis nobis ducimus tenetur ipsam nesciunt libero provident corrupti perspiciatis 
                        aperiam vel hic illo saepe repellendus assumenda quia ad voluptatum alias?
                    </p>
                    <a href="" className=' primaryBtn !mt-8 inline-flex items-center gap-4 group'>
                        Subscribe Now
                        <FaBell className=' group-hover:animate-bounce group-hover:text-lg duration-200' />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Subscribe