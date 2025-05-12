
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ListingProps {
  id: string;
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
}

const listings: ListingProps[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Waterfront Estate",
    address: "1234 Bayshore Blvd, Tampa FL",
    price: "$3,950,000",
    beds: 5,
    baths: 6,
    sqft: 6500,
    description: "Private waterfront retreat with panoramic bay views"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Modern Penthouse",
    address: "555 Brickell Ave, Miami FL",
    price: "$2,750,000",
    beds: 3,
    baths: 3.5,
    sqft: 3200,
    description: "Stunning penthouse with floor-to-ceiling windows and oceanfront views"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Gated Estate",
    address: "789 Davis Islands, Tampa FL",
    price: "$4,200,000",
    beds: 6,
    baths: 7,
    sqft: 7800,
    description: "Mediterranean-inspired mansion with private dock access"
  }
];

const ListingCard: React.FC<ListingProps> = ({ 
  image, title, address, price, beds, baths, sqft, description, id 
}) => {
  return (
    <div className="luxury-card rounded-lg overflow-hidden animate-fade-in">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-luxury-gold px-4 py-1 text-white font-bold">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-playfair mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{address}</p>
        <p className="text-gray-700 mb-4 text-sm italic">{description}</p>
        
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
          <div className="flex space-x-4 text-sm">
            <span>{beds} Beds</span>
            <span>{baths} Baths</span>
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
          <Link to={`/listing/${id}`} className="text-luxury-gold hover:underline flex items-center font-medium">
            View Details <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="luxury-container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Featured Luxury Properties</h2>
            <p className="text-gray-600 max-w-2xl">Discover our curated collection of exclusive properties in Tampa and Miami's most prestigious neighborhoods.</p>
          </div>
          <Link to="/listings" className="hidden md:flex items-center text-luxury-gold hover:underline font-semibold">
            View All Listings <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map(listing => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/listings" className="btn-gold">
            Browse All Luxury Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
