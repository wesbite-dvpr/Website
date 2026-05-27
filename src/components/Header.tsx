import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              OMNIX<span className="text-gold-500">.</span> CAPITAL
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {['Expertise', 'Heritage', 'Global Scale', 'Insights', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 ${isScrolled ? 'text-gray-300' : 'text-white/90 drop-shadow-sm'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              className={`p-2 transition-colors ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gold-500'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-900 border-t border-brand-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Expertise', 'Heritage', 'Global Scale', 'Insights', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-gold-500 hover:bg-brand-800 uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
