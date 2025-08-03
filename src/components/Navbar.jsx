// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
        setIsOpen(false);
    };
    
    const SupportButton = () => (
        <ScrollLink
            to="donation-section"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-brand-blue hover:bg-brand-blue/80 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)} // Close menu on click
        >
            Support the Vision
        </ScrollLink>
    );

    // --- UPDATED: The navigation links array now only contains "The Founder" ---
    const navLinks = [
        { name: 'The Founder', to: 'about-founder' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
                <div className="section-container flex items-center justify-between h-20">
                    {/* Logo scrolls to top */}
                    <button onClick={scrollToTop} className="font-display text-2xl font-bold text-text-primary">
                        Rihla
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                                activeClass="text-brand-blue font-bold"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <SupportButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-30 bg-brand-dark/95 backdrop-blur-xl pt-20"
                    >
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="text-2xl text-text-secondary hover:text-text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}
                             <div className="pt-8">
                                <SupportButton />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}