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
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
          >
            <FileDown size={18} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;