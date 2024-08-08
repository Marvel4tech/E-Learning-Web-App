import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className=" py-28 bg-[#f7f7f7]">
        <motion.div className=" container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity:1, y:0 }}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-4">
                <div className=" space-y-4 max-w-[300px]">
                    <h1 className=" text-2xl font-bold">The Coding Journey</h1>
                    <p className=" text-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, sit quam? Eligendi
                        beatae tempora ea distinctio, blanditiis minus ullam laudantium placeat magni ab 
                        ipsam natus non quos tempore repellendus? Officiis?
                    </p>
                </div>
                <div className=" gird grid-cols-2 gap-10">
                    <div className=" space-y-4">
                        <h1 className=" text-2xl font-bold">Courses</h1>
                        <div className=" text-dark2">
                            <ul className=" space-y-2 text-lg">
                                <li className=" cursor-pointer hover:text-secondary duration-200">Web Development</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">Software Development</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">Apps Development</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">E-learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" space-y-4">
                        <h1 className=" text-2xl font-bold">Links</h1>
                        <div className=" text-dark2">
                            <ul className=" space-y-2 text-lg">
                                <li className=" cursor-pointer hover:text-secondary duration-200">Home</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">Services</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">About</li>
                                <li className=" cursor-pointer hover:text-secondary duration-200">E-learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" space-y-4 max-w-[300px">
                    <h1 className=" text-2xl font-bold">Get in Touch</h1>
                    <div className=" flex items-center">
                        <input type="text" placeholder="Enter your email" 
                            className=" p-3 rounded-s-xl bg-[white] w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
                        />
                        <button className=" bg-primary text-[white] font-semibold py-4 px-6 rounded-e-xl">Go</button>
                    </div>
                    <div className=" flex space-x-6 py-3">
                        <a href="#">
                            <FaWhatsapp className=" cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                        </a>
                        <a href="#">
                            <FaInstagram className=" cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                        </a>
                        <a href="#">
                            <TbWorldWww className=" cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                        </a>
                        <a href="#">
                            <FaYoutube className=" cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer