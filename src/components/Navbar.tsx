import { Link } from 'react-scroll';
import { FileDown } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { title: 'About', to: 'hero' },
    { title: 'Education', to: 'education' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
      <nav className="w-full text-white py-4 px-6 md:px-24 absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-white hover:text-gray-300 cursor-pointer transition-colors text-base md:text-lg uppercase tracking-wide"
                >
                  {item.title}
                </Link>
            ))}
          </div>

          <button
              className="flex items-center space-x-2 px-5 py-2 rounded-full border border-white text-sm md:text-base hover:bg-white hover:text-black transition-colors"
              onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
          >
            <FileDown size={18} />
            <span>Download CV</span>
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
