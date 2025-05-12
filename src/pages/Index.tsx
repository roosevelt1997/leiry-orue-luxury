
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedListings from '../components/FeaturedListings';
import RecentlySold from '../components/RecentlySold';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
import FreeGuides from '../components/FreeGuides';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Leiry Orue | Luxury Real Estate Specialist - Tampa & Miami";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedListings />
        <RecentlySold />
        <Testimonials />
        <AboutSection />
        <FreeGuides />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
