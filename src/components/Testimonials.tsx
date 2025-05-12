
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  textEs: string;
  image: string;
  type: 'Buyer' | 'Seller' | 'Investor';
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marisol Rodriguez",
    location: "Brickell, Miami",
    text: "Leiry not only demonstrated deep expertise in real estate but also served as a trusted guide throughout the entire process. Her bilingual skills were invaluable in explaining complex details and ensuring I felt confident in my investment.",
    textEs: "Leiry no solo es una experta en bienes raíces, sino también una guía confiable durante todo el proceso. Sus habilidades bilingües fueron invaluables para explicar detalles complejos y asegurar que me sintiera confiada en mi inversión.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    type: "Buyer"
  },
  {
    id: "t2",
    name: "James Wilson",
    location: "Davis Islands, Tampa",
    text: "Selling our waterfront property required someone with high-end market knowledge and an exceptional marketing approach. Leiry exceeded our expectations, securing multiple offers and closing above asking price within just two weeks.",
    textEs: "Vender nuestra propiedad frente al mar requería alguien con conocimiento del mercado de lujo y un enfoque de marketing excepcional. Leiry superó nuestras expectativas, obteniendo múltiples ofertas y cerrando por encima del precio pedido en solo dos semanas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    type: "Seller"
  },
  {
    id: "t3",
    name: "Carlos Mendez",
    location: "Coral Gables, Miami",
    text: "As an international investor, I needed someone who understood both the Florida market and could communicate effectively in Spanish. Leiry's expertise and cultural understanding made my property acquisitions seamless and profitable.",
    textEs: "Como inversor internacional, necesitaba alguien que entendiera el mercado de Florida y pudiera comunicarse efectivamente en español. La experiencia de Leiry y su comprensión cultural hicieron que mis adquisiciones de propiedades fueran fluidas y rentables.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    type: "Investor"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(true);
  const [activeType, setActiveType] = useState<'All' | 'Buyer' | 'Seller' | 'Investor'>('All');
  
  const filteredTestimonials = activeType === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeType);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (filteredTestimonials.length === 0) {
    return null;
  }

  const testimonial = filteredTestimonials[activeIndex % filteredTestimonials.length];

  return (
    <section className="py-16 bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Client Testimonials</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Hear from my clients about their experiences working with me in Tampa and Miami's luxury real estate market.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-full shadow-md inline-flex p-1">
              {(['All', 'Buyer', 'Seller', 'Investor'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveType(type);
                    setActiveIndex(0);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeType === type
                      ? 'bg-luxury-gold text-white'
                      : 'text-gray-600 hover:text-luxury-gold'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <label className="language-toggle">
              <span className={`mr-2 text-sm font-medium ${isEnglish ? 'text-luxury-gold' : ''}`}>English</span>
              <input 
                type="checkbox" 
                className="language-toggle-input sr-only" 
                checked={!isEnglish}
                onChange={() => setIsEnglish(!isEnglish)}
              />
              <span className="language-toggle-slider"></span>
              <span className={`ml-2 text-sm font-medium ${!isEnglish ? 'text-luxury-gold' : ''}`}>Español</span>
            </label>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <Quote className="absolute text-luxury-gold/20 w-16 h-16 -top-6 -left-6" />
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 flex-shrink-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-luxury-gold"
                />
              </div>
              
              <div className="md:w-3/4">
                <blockquote className="text-lg md:text-xl italic mb-6 animate-fade-in">
                  {isEnglish ? testimonial.text : testimonial.textEs}
                </blockquote>
                
                <div className="font-bold font-playfair text-lg">
                  {testimonial.name}
                </div>
                <div className="text-luxury-gold text-sm">
                  {testimonial.location} • {testimonial.type}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={handlePrev}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
