// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);
  
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/60 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="font-display text-2xl font-bold cursor-pointer text-text-primary" onClick={() => scrollToSection('hero')}>
              Rihla
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-text-secondary hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about-founder')} className="text-text-secondary hover:text-white transition-colors">
                About the Founder
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative w-8 h-8">
                <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="block w-full h-0.5 bg-brand-light absolute"></motion.span>
                <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="block w-full h-0.5 bg-brand-light absolute mt-2"></motion.span>
                <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="block w-full h-0.5 bg-brand-light absolute mt-4"></motion.span>
              </button>
            </div>

          </div>
        </div>
      </motion.nav> {/* <-- This is the corrected closing tag */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="fixed inset-0 z-40 bg-brand-dark/90 backdrop-blur-xl flex flex-col justify-center items-center space-y-8"
          >
              <button onClick={() => scrollToSection('hero')} className="font-display text-4xl text-brand-light">Home</button>
              <button onClick={() => scrollToSection('about-founder')} className="font-display text-4xl text-brand-light">About the Founder</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}