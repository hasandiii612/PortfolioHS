import { motion } from 'framer-motion';
import setupImage from '../assets/setup.jpg';
import hasandiImg from '../assets/hasandi.jpg';

const Hero = () => {
  return (
      <section
          id="hero"
          className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-24 relative"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
              src={setupImage}
              alt="workspace"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
          {/* Left: Name + Paragraph + Button */}
          <motion.div
              className="max-w-xl mt-12 md:mt-24"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl italic font-light font-serif tracking-wide mb-6 whitespace-nowrap">
              Hasandí Seelarathne
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-200 font-light leading-relaxed">
              A passionate developer and designer specializing in creating intuitive, engaging,
              and seamless digital experiences by blending design with functionality.
            </p>

            <a
                href="https://www.linkedin.com/in/hasandi-seelarathne"
                target="_blank"
                rel="noopener noreferrer"
            >
              <button className="mt-8 flex items-center gap-2 bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                <span>Let's Connect</span>
                <span className="text-lg">→</span>
              </button>
            </a>
          </motion.div>

          {/* Right: Circular Profile Image */}
          <motion.div
              className="w-56 h-56 md:w-72 md:h-72"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
