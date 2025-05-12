
import React from 'react';
import { Award, Globe, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="luxury-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-luxury-gold rounded-lg"></div>
              <img 
                src="/lovable-uploads/9804d1cb-3ef9-40b9-9703-2cdeec455012.png"
                alt="Leiry Orue - Luxury Real Estate Specialist" 
                className="w-full h-auto rounded-lg shadow-2xl object-cover z-10 relative"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">About Leiry Orue</h2>
            <p className="text-gray-600 mb-6">
              As a bilingual real estate professional specializing in the luxury markets of Tampa and Miami, 
              I bring a unique perspective and dedicated approach to every transaction. My commitment is to 
              provide an elevated experience for discerning clients seeking exceptional properties in Florida's 
              most desirable locations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Award className="text-luxury-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-playfair text-lg mb-1">Trusted Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Trusted advisor for luxury buyers and sellers across Tampa and Miami
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Globe className="text-luxury-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-playfair text-lg mb-1">Bilingual Service</h3>
                  <p className="text-gray-600 text-sm">
                    Fluent in English & Spanish with culturally aligned service
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Users className="text-luxury-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-playfair text-lg mb-1">Investment-Savvy</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic advice for investors and relocation specialists
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Check className="text-luxury-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-playfair text-lg mb-1">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">
                    Personalized, discreet, and results-driven approach
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/about" className="btn-gold">
                Learn More About Leiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
