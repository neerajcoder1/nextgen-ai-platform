import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import BentoAccordion from './components/BentoAccordion';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Icon } from './components/Icons';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary-bg text-light-surface antialiased overflow-x-hidden">
      {/* Semantic Layout: header, main, footer */}
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Social Proof */}
        <SocialProof />
        
        {/* Core Features */}
        <Features />
        
        {/* Bento Grid / Accordion Component */}
        <BentoAccordion />
        
        {/* Performance-Isolated Pricing Section */}
        <Pricing />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Call to Action */}
        <CTA />
      </main>
      
      <Footer />

      {/* Floating Scroll-to-Top Button (uses chevron-up) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-xl bg-secondary-bg/85 backdrop-blur border border-border-neutral/15 text-light-surface hover:text-primary-accent hover:border-primary-accent shadow-2xl transition-all duration-300 z-50 focus:outline-none ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <Icon name="chevron-up" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;
