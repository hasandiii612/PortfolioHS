import { motion } from 'framer-motion';

const Hero = () => {
  return (
      <section
          id="hero"
          className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-24 relative"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
              src="/setup.jpg"
              alt="workspace"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-light mb-2">Hi, I'm</h1>
            <h2 className="text-5xl md:text-7xl italic font-light font-serif mb-4">
              Hasandí <br className="hidden md:block" />Seelarathne
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl">
              A passionate developer and designer specializing in creating intuitive, engaging,
              and seamless digital experiences by blending design with functionality.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
              <span>Let's Connect</span>
              <span className="text-lg">→</span>
            </button>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
              className="w-60 h-60 md:w-72 md:h-72"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
                src="/hasandi.jpg"
                alt="Hasandí Seelarathne"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
