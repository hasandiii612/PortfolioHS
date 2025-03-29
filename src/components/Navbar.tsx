import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="w-full z-50 px-6 md:px-24 pl-20 font-semibold text-white text-xl absolute top-6  font-tomorrow">
        <div className="max-w-7xl mx-auto flex justify-end items-center py-2">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
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

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
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
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
              ))}
            </div>
        )}
      </nav>
  );
};

export default Navbar;