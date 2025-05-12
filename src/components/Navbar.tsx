
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="luxury-container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold font-playfair text-luxury-black">
              <span className="text-luxury-gold">LEIRY</span> ORUE
            </div>
            <span className="ml-2 text-xs tracking-wider font-montserrat text-luxury-charcoal">REALTOR®</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-luxury-charcoal hover:text-luxury-gold transition-colors">
            Home
          </Link>
          <Link to="/listings" className="nav-link text-luxury-charcoal hover:text-luxury-gold transition-colors">
            Listings
          </Link>
          <Link to="/about" className="nav-link text-luxury-charcoal hover:text-luxury-gold transition-colors">
            About
          </Link>
          <Link to="/guides" className="nav-link text-luxury-charcoal hover:text-luxury-gold transition-colors">
            Neighborhood Guides
          </Link>
          <Link to="/contact" className="nav-link text-luxury-charcoal hover:text-luxury-gold transition-colors">
            Contact
          </Link>
          <LanguageToggle />
          <Link to="/contact" className="btn-gold whitespace-nowrap flex items-center">
            <Phone size={16} className="mr-2" />
            <span>Schedule Consultation</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="ml-4 text-luxury-charcoal hover:text-luxury-gold focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full animate-fade-in">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/listings"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              Listings
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/guides"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              Neighborhood Guides
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-gold py-2 text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
