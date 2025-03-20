import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">Nidhika Chaudhary</div>
          
          <ul className={`md:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-gray-900 p-4 flex flex-col space-y-4 md:space-y-0 md:relative md:top-0 md:p-0' : 'hidden md:flex'}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;