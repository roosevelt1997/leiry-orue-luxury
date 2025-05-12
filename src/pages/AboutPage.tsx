
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Leiry Orue | Luxury Real Estate Specialist";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="luxury-container py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">About Leiry Orue</h1>
          <p className="text-gray-600 max-w-3xl">
            Learn more about my background, expertise, and commitment to providing exceptional real estate services.
          </p>
        </div>
        <AboutSection />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
