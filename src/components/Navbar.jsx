import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Platform', href: '#bento' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-primary-bg/95 backdrop-blur-md py-4 border-secondary-bg' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="bg-primary-accent text-primary-bg p-2 rounded-lg transition-transform duration-200 group-hover:scale-105">
            <Icon name="cube-16-solid" className="w-6 h-6" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tight text-light-surface">
            KRONOS<span className="text-primary-accent">.AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-sm font-medium text-light-surface/85 hover:text-primary-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#pricing" 
            className="px-5 py-2.5 rounded-lg border border-border-neutral/30 text-sm font-mono font-medium text-light-surface hover:bg-secondary-bg hover:border-primary-accent transition-all duration-200 flex items-center space-x-2"
          >
            <span>Interactive Demo</span>
            <Icon name="arrow-trending-up" className="w-4 h-4 text-primary-accent" />
          </a>
          <a 
            href="#pricing" 
            className="px-5 py-2.5 rounded-lg bg-primary-accent text-primary-bg text-sm font-mono font-bold hover:bg-secondary-accent hover:text-light-surface transition-all duration-200 shadow-lg shadow-primary-accent/10"
          >
            Deploy Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-light-surface hover:text-primary-accent transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Icon name={isMobileMenuOpen ? 'x-mark' : 'cog-8-tooth'} className="w-6 h-6 animate-spin-slow" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-primary-bg border-b border-secondary-bg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] py-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-light-surface/90 hover:text-primary-accent py-2 transition-colors duration-200 border-b border-secondary-bg/30"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <a 
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 rounded-lg border border-border-neutral/30 text-center font-mono font-medium text-light-surface hover:bg-secondary-bg transition-all duration-200"
            >
              Interactive Demo
            </a>
            <a 
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 rounded-lg bg-primary-accent text-primary-bg text-center font-mono font-bold hover:bg-secondary-accent hover:text-light-surface transition-all duration-200"
            >
              Deploy Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
