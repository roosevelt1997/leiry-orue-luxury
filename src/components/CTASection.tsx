
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-luxury-black text-white">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
            Ready to Find Your <span className="text-luxury-gold">Perfect Property</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's schedule a private consultation to discuss your real estate goals in Tampa or Miami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg hover:bg-white/15 transition-all">
            <h3 className="text-xl font-bold font-playfair mb-2">Buyers</h3>
            <p className="text-gray-300 mb-4">
              Discover exclusive properties tailored to your lifestyle and preferences.
            </p>
            <Link to="/contact?type=buyer" className="text-luxury-gold hover:underline flex items-center font-semibold">
              Schedule Buyer Consultation <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg hover:bg-white/15 transition-all">
            <h3 className="text-xl font-bold font-playfair mb-2">Sellers</h3>
            <p className="text-gray-300 mb-4">
              Maximize your property's value with strategic marketing and expert negotiation.
            </p>
            <Link to="/contact?type=seller" className="text-luxury-gold hover:underline flex items-center font-semibold">
              Schedule Seller Consultation <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg hover:bg-white/15 transition-all">
            <h3 className="text-xl font-bold font-playfair mb-2">Investors</h3>
            <p className="text-gray-300 mb-4">
              Explore lucrative investment opportunities in Tampa and Miami's growing markets.
            </p>
            <Link to="/contact?type=investor" className="text-luxury-gold hover:underline flex items-center font-semibold">
              Schedule Investment Consultation <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-gold inline-flex items-center">
            <Calendar size={18} className="mr-2" />
            Book Your Private Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
