
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-luxury-black/30 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          filter: 'brightness(0.8)'
        }}
      ></div>
      
      <div className="luxury-container relative z-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-7/12 space-y-6 text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight animate-fade-in">
            Luxury Living, <br />
            <span className="text-luxury-gold">Tailored for You</span> <br />
            in Tampa & Miami.
          </h1>
          <p className="text-xl md:text-2xl font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Bilingual Guidance. High-Impact Results. Elevated Experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/contact" className="btn-gold flex items-center justify-center">
              Schedule Your Private Consultation <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/listings" className="border border-white hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors py-3 px-8 rounded-md font-semibold text-center">
              View Luxury Listings
            </Link>
          </div>
        </div>
        
        <div className="hidden md:block w-5/12 pl-12">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-luxury-gold rounded-lg"></div>
            <img 
              src="/lovable-uploads/9804d1cb-3ef9-40b9-9703-2cdeec455012.png" 
              alt="Leiry Orue - Luxury Real Estate Specialist" 
              className="w-full h-auto rounded-lg shadow-2xl object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
