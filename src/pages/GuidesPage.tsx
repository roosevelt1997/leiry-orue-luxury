
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FreeGuides from "../components/FreeGuides";

const GuidesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Neighborhood Guides | Leiry Orue Real Estate";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="luxury-container py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Neighborhood Guides</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our comprehensive guides to Tampa and Miami's most exclusive neighborhoods.
          </p>
        </div>
        <FreeGuides />
      </main>
      
      <Footer />
    </div>
  );
};

export default GuidesPage;
