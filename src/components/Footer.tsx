
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold font-playfair">
                <span className="text-luxury-gold">LEIRY</span> ORUE
              </div>
              <div className="text-xs tracking-wider font-montserrat">REALTOR®</div>
            </Link>
            <p className="text-gray-400 mb-6">
              Bilingual luxury real estate specialist serving the exclusive markets of Tampa and Miami, Florida.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-luxury-gold">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-luxury-gold">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-luxury-gold">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-gray-400 hover:text-luxury-gold transition-colors">Luxury Listings</Link></li>
              <li><Link to="/sold" className="text-gray-400 hover:text-luxury-gold transition-colors">Recently Sold</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors">About Leiry</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-luxury-gold transition-colors">Neighborhood Guides</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Service Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/tampa" className="text-gray-400 hover:text-luxury-gold transition-colors">Tampa</Link></li>
              <li><Link to="/miami" className="text-gray-400 hover:text-luxury-gold transition-colors">Miami</Link></li>
              <li><Link to="/coral-gables" className="text-gray-400 hover:text-luxury-gold transition-colors">Coral Gables</Link></li>
              <li><Link to="/brickell" className="text-gray-400 hover:text-luxury-gold transition-colors">Brickell</Link></li>
              <li><Link to="/davis-islands" className="text-gray-400 hover:text-luxury-gold transition-colors">Davis Islands</Link></li>
              <li><Link to="/hyde-park" className="text-gray-400 hover:text-luxury-gold transition-colors">Hyde Park</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-luxury-gold" />
                <a href="tel:8135082092" className="text-gray-400 hover:text-luxury-gold transition-colors">813-508-2092</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-luxury-gold" />
                <a href="mailto:contact@leiryorue.com" className="text-gray-400 hover:text-luxury-gold transition-colors">contact@leiryorue.com</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-luxury-gold mt-1" />
                <span className="text-gray-400">
                  123 Luxury Avenue<br />
                  Tampa, FL 33602
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Leiry Orue Realty. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <Link to="/privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
