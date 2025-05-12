
import React from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Contact Leiry Orue</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your real estate needs? Reach out for personalized service in English or Spanish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="text-luxury-gold w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-playfair text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">
                      123 Luxury Avenue<br />
                      Tampa, FL 33602
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                    <Phone className="text-luxury-gold w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-playfair text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:8135082092" className="hover:text-luxury-gold transition-colors">813-508-2092</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                    <Mail className="text-luxury-gold w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-playfair text-lg mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:contact@leiryorue.com" className="hover:text-luxury-gold transition-colors">contact@leiryorue.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                    <Clock className="text-luxury-gold w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-playfair text-lg mb-1">Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri: 9am - 6pm<br />
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg h-64 md:h-80">
              {/* Map placeholder - would be replaced with actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                <p className="text-gray-500">Interactive Map - Service Areas in Tampa & Miami</p>
              </div>
            </div>
          </div>
          
          <div>
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
