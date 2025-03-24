import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FileDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'About', to: 'hero' },
    { title: 'Education', to: 'education' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'Testimonials', to: 'testimonials' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
      <nav className="w-full z-50 px-6 md:px-24 font-light text-white" style={{ backgroundColor: 'transparent' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
          <div className="hidden md:flex space-x-10 text-base font-light">
            {navItems.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="cursor-pointer hover:text-gray-300 transition"
                >
                  {item.title}
                </Link>
            ))}
          </div>

          <button
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-sm"
              onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
          >
            <FileDown size={18} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-2 px-4">
          {navItems.map((item) => (
              <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block py-2 text-sm hover:text-gray-300"
              >
                {item.title}
              </Link>
          ))}
        </div>
      </nav>
  );
};

export default Navbar;
