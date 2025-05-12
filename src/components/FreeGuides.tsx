
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GuideProps {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'Buyer' | 'Seller' | 'Investor';
}

const guides: GuideProps[] = [
  {
    id: "g1",
    title: "Luxury Buyer's Guide: Tampa & Miami",
    description: "Navigate the high-end real estate market with insider tips on finding your dream home.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    type: "Buyer"
  },
  {
    id: "g2",
    title: "Maximizing Your Luxury Property Value",
    description: "Strategic advice for preparing and marketing your high-end home for maximum returns.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    type: "Seller"
  },
  {
    id: "g3",
    title: "Florida Investment Property Analysis",
    description: "Comprehensive guide to evaluating and acquiring profitable real estate investments.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    type: "Investor"
  }
];

const GuideCard: React.FC<GuideProps> = ({ title, description, image, id, type }) => {
  return (
    <div className="luxury-card rounded-lg overflow-hidden animate-fade-in h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-luxury-gold px-3 py-1 text-white text-sm font-medium">
          {type} Guide
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-playfair mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link 
          to={`/guides/${id}`}
          className="mt-auto text-luxury-gold hover:underline flex items-center font-medium"
        >
          <FileText size={16} className="mr-2" />
          Download Free Guide <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const FreeGuides: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Free Luxury Real Estate Guides</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive guides to help you navigate the luxury real estate market in Tampa and Miami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map(guide => (
            <GuideCard key={guide.id} {...guide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeGuides;
