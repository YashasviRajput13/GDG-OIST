import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Activities', href: '#activities' },
  { name: 'Community', href: '#community' },
  { name: 'Team', href: '#leadership' }
];

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://imgs.search.brave.com/le975r8277lQcvBA_AY0FBzFkrYVYqbzzgXoQav4QTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/MC9nb29nbGVfZGV2/ZWxvcGVycy1sb2dv/X2JyYW5kbG9nb3Mu/bmV0X2RjZHBnLTUx/Mng1MTIucG5n" alt="Google" className={`h-6 ${!scrolled ? 'brightness-0 invert' : 'opacity-80'}`} />
            <div className={`h-6 w-[1px] ${scrolled ? 'bg-gray-300' : 'bg-white/30'} hidden sm:block`} />
            <span className={`font-medium text-lg tracking-tight ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              GDG <span className={`${scrolled ? 'text-gray-500 font-normal' : 'text-white/70 font-normal'}`}>OIST Bhopal</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-google-blue' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 ${scrolled ? 'bg-google-blue text-white hover:shadow-lg' : 'bg-white text-google-blue hover:bg-white/90 shadow-xl'}`}>
              Join Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-700' : 'text-white'} p-2`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 p-8 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-lg font-medium hover:text-google-blue"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-google-blue text-white px-6 py-4 rounded-xl text-center font-medium">
              Join Our Chapter
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;