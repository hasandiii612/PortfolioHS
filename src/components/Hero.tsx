import { motion } from 'framer-motion';
import hasandiImg from '../assets/Hasandi_CS.png';
import logo from '../assets/HASANDILogo.png';
import animationBg from '../assets/animation_4.gif';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
      <section
          id="hero"
          className="bg-black text-white min-h-screen flex items-center justify-center px-0 md:px-0 relative overflow-hidden"
      >

        {/* GIF Background with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
              src={animationBg} // Use the imported variable
              alt="Animated background"
              className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-black opacity-70"/>
        </div>

        {/* Logo Top Left */}
        <motion.div
            className="absolute top-6 left-[-160px] z-20"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
        >
          <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <img
                src={logo}
                alt="Logo"
                className="w-[450px] h-auto md:w-[600px] object-contain"
            />
          </ScrollLink>
        </motion.div>

        {/* ✨ Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
          {/* Left Side - Text */}
          <motion.div
              className="max-w-xl mt-12 md:mt-24 ml-6 md:ml-4"
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold font-tektur tracking-wide mb-6">
              Hasandí Seelarathne
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-200 font-light leading-relaxed font-tomorrow">
              A passionate developer and designer specializing in creating intuitive, engaging,
              and seamless digital experiences by blending design with functionality.
            </p>

            <a
                href="https://www.linkedin.com/in/hasandi-seelarathne"
                target="_blank"
                rel="noopener noreferrer"
            >
              <button
                  className="mt-8 flex items-center gap-2 bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-tomorrow"
              >
                <span>Let's Connect</span>
                <span className="text-lg">→</span>
              </button>
            </a>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
              className="w-[420px] h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] mt-8 ml-8 md:ml-16"
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.8, delay: 0.3}}
          >
            <img
                src={hasandiImg}
                alt="Hasandí Seelarathne"
                className="w-full h-full object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
