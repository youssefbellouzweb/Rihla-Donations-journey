// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

// This is a valid, professional easing curve that won't crash the animation engine.
const aValidEasing = [0.6, 0.01, 0.2, 0.95];

// --- The Kinetic Link Component for the Mobile Menu ---
const KineticLink = ({ to, name, onClick }) => {
    const containerVariants = {
        animate: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } }
    };
    const letterVariants = {
        initial: { y: 20, opacity: 0, rotate: 10 },
        animate: { y: 0, opacity: 1, rotate: 0, transition: { ease: aValidEasing, duration: 0.8 } }
    };

    return (
        <ScrollLink to={to} smooth duration={500} offset={-60} onClick={onClick} className="cursor-pointer">
            <motion.div
                className="relative text-4xl text-gray-300 hover:text-white transition-colors duration-200"
                initial="initial"
                animate="animate"
                variants={containerVariants}
            >
                {name.split('').map((char, index) => (
                    <motion.span key={`${char}-${index}`} className="inline-block" variants={letterVariants}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.div>
        </ScrollLink>
    );
};


// --- The Main Navbar Component ---
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('hero');
    const navRef = useRef(null);

    const navLinks = [
        { name: 'About', to: 'about-me' },
        { name: 'The Vision', to: 'solution' },
        { name: 'Features', to: 'features' },
        { name: 'Contact', to: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-40 flex justify-center">
                <motion.div
                    ref={navRef}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: isScrolled ? 16 : 32, opacity: 1 }}
                    transition={{ duration: 0.6, ease: aValidEasing }}
                    className="w-[95%] max-w-4xl h-14 rounded-full border border-white/10 bg-black/30 shadow-lg backdrop-blur-lg flex items-center justify-between px-6"
                >
                    <ScrollLink to="hero" smooth duration={500} onSetActive={() => setActiveLink('hero')} className="font-display text-xl font-bold text-white cursor-pointer">
                        Rihla
                    </ScrollLink>
                    
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.to} to={link.to} spy smooth duration={500} offset={-120} onSetActive={() => setActiveLink(link.to)}
                                className="relative text-sm text-gray-300 hover:text-white transition-colors cursor-pointer px-4 py-2"
                            >
                                {link.name}
                                {activeLink === link.to && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                                        layoutId="active-pill"
                                        transition={{ type: 'spring', duration: 0.6 }}
                                    />
                                )}
                            </ScrollLink>
                        ))}
                    </nav>
                    
                    <div className="flex items-center gap-4">
                        <ScrollLink to="donation" smooth duration={500} offset={-120} className="hidden md:block bg-white text-black text-sm font-semibold py-2 px-4 rounded-full transition-colors hover:bg-gray-200 cursor-pointer">
                            Donate
                        </ScrollLink>
                        <div className="md:hidden">
                            <motion.button onClick={() => setIsOpen(!isOpen)} className="text-white z-50 relative h-6 w-6">
                                <motion.span
                                    className="absolute h-0.5 w-full bg-current"
                                    style={{ y: 8, x: '-50%', left: '50%' }}
                                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 11 : 8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                                <motion.span
                                    className="absolute h-0.5 w-full bg-current"
                                    style={{ y: 16, x: '-50%', left: '50%' }}
                                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 11 : 16 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden fixed inset-0 z-30 bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.5 } }}
                    >
                        <motion.div
                            className="w-full h-full flex flex-col items-center justify-center space-y-6"
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            variants={{ animate: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }}
                        >
                            {[...navLinks, { name: 'Donate Now', to: 'donation' }].map(link => (
                                <KineticLink key={link.to} to={link.to} name={link.name} onClick={() => setIsOpen(false)} />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}