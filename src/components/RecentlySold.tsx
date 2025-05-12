
import React from 'react';

interface SoldProperty {
  id: string;
  address: string;
  image: string;
  salePrice: string;
  listPrice: string;
  percentageDiff: string;
  clientRole: "Buyer" | "Seller" | "Both";
  daysOnMarket: number;
  highlight?: string;
}

const soldProperties: SoldProperty[] = [
  {
    id: "s1",
    address: "3213 W Ivy St, Tampa FL 33607",
    image: "/lovable-uploads/e4f8e451-da3c-4b93-9cf3-87c28a717556.png",
    salePrice: "$460,000",
    listPrice: "$445,000",
    percentageDiff: "+3.4%",
    clientRole: "Seller",
    daysOnMarket: 5,
    highlight: "Sold in 5 days for 3.4% over asking"
  },
  {
    id: "s2",
    address: "1560 Brickell Ave #1805, Miami FL 33129",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    salePrice: "$1,275,000",
    listPrice: "$1,299,000",
    percentageDiff: "-1.8%",
    clientRole: "Buyer",
    daysOnMarket: 32
  },
  {
    id: "s3",
    address: "4302 Bayshore Blvd, Tampa FL 33611",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    salePrice: "$2,850,000",
    listPrice: "$2,795,000",
    percentageDiff: "+2%",
    clientRole: "Both",
    daysOnMarket: 14,
    highlight: "Represented both buyer and seller"
  },
  {
    id: "s4",
    address: "12543 Cortez Rd, Coral Gables FL 33146",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    salePrice: "$3,200,000",
    listPrice: "$3,395,000",
    percentageDiff: "-5.7%",
    clientRole: "Buyer",
    daysOnMarket: 87,
    highlight: "Negotiated $195k below asking price"
  }
];

const SoldPropertyCard: React.FC<SoldProperty> = ({
  address, image, salePrice, listPrice, percentageDiff, clientRole, daysOnMarket, highlight
}) => {
  const isPositiveDiff = percentageDiff.startsWith("+");

  return (
    <div className="luxury-card rounded-lg overflow-hidden flex flex-col md:flex-row animate-fade-in">
      <div className="md:w-1/3">
        <img src={image} alt={address} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold font-playfair mb-2">{address}</h3>
        <div className="flex flex-wrap gap-6 mb-4">
          <div>
            <p className="text-sm text-gray-500">Sale Price</p>
            <p className="text-lg font-semibold">{salePrice}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">List Price</p>
            <p className="text-lg">{listPrice}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Difference</p>
            <p className={`text-lg font-medium ${isPositiveDiff ? 'text-green-600' : 'text-red-600'}`}>{percentageDiff}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="text-lg">
              {clientRole === "Buyer" && "Buyer's Agent"}
              {clientRole === "Seller" && "Listing Agent"}
              {clientRole === "Both" && "Dual Agent"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Days on Market</p>
            <p className="text-lg">{daysOnMarket}</p>
          </div>
        </div>
        {highlight && (
          <div className="mt-2 bg-luxury-gold/10 p-3 rounded-md">
            <p className="text-luxury-gold font-medium">{highlight}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RecentlySold: React.FC = () => {
  return (
    <section className="py-16">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Recently Sold Properties</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Results that speak for themselves. Take a look at my recent successful transactions in the Tampa and Miami luxury markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {soldProperties.map(property => (
            <SoldPropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlySold;
