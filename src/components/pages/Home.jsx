import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { FaHandPeace, FaUser, FaGithub } from "react-icons/fa";
import vectorPng from "/src/assets/images/vector.png";

export default function Home({ siteProps }) {
    return (
        <div className="h-full" id="Home">
            <div className="flex container mx-auto h-full items-center justify-around px-5">
                <div className="max-w-[420px]">
                    {/* Heading with animation */}
                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6 }}
                        className="md:text-3xl text-2xl font-bold flex items-center gap-2"
                    >
                        <FaHandPeace className="text-yellow-500" />
                        Hii!
                    </motion.h1>

                    {/* Typing Animation for Title */}
                    <h1 className="md:text-5xl text-4xl font-bold mt-2">
                        <Typewriter
                            words={siteProps.title}
                            loop={0}  // Infinite loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500} // Time before deleting
                        />
                    </h1>

                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm text-gray-600 mt-4"
                    >
                        {siteProps.description}
                    </motion.p>

                    {/* About Me Button */}
                    <motion.a 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        href="#about" 
                        className="btn bg-black py-3 text-md text-white px-10 font-bold mt-4 rounded-full flex items-center gap-2 w-max"
                    >
                        <FaUser className="text-white text-lg" />
                        Know About Me
                    </motion.a>

                    {/* GitHub Profile Button */}
                    <motion.a 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        href={siteProps.github} 
                        target="_blank" 
                        className="btn bg-gray-300 py-3 text-md text-black px-10 font-bold mt-4 rounded-full flex items-center gap-2 w-max"
                    >
                        <FaGithub className="text-black text-lg" />
                        View My Github Profile
                    </motion.a>
                </div>

                {/* Hero Image with Motion */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full w-full max-w-[460px] max-h-[520px] md:block hidden" 
                    style={{
                        background: `url(${vectorPng}) center no-repeat`,
                        backgroundSize: "contain"
                    }}
                />
            </div>
        </div>
    );
}
