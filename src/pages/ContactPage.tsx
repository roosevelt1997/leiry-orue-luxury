
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Leiry Orue | Luxury Real Estate Specialist";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="luxury-container py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Contact Leiry Orue</h1>
          <p className="text-gray-600 max-w-3xl">
            Ready to discuss your real estate needs? Reach out for personalized service in English or Spanish.
          </p>
        </div>
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
