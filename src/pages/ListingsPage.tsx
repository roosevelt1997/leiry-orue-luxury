
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedListings from "../components/FeaturedListings";

const ListingsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Luxury Listings | Leiry Orue Real Estate";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="luxury-container py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Luxury Listings</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our exclusive collection of luxury properties in Tampa and Miami's most prestigious neighborhoods.
          </p>
        </div>
        <FeaturedListings />
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingsPage;
