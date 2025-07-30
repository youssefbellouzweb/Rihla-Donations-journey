// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const ArrowIcon = () => ( /* This component is unchanged */ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.7a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clipRule="evenodd" /></svg> );

export default function Hero() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2, }, }, };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', }, }, };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-brand-dark bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:32px_32px]"></div>
      {/* ✨ NEW: Background glow for depth */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-3xl"></div>


      <motion.div
        className="section-container z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="h1-display gradient-text mb-6">
          Rihla: The Future of Moroccan Transport.
          <br />
          Built on Trust.
        </motion.h1>

        <motion.p variants={itemVariants} className="p-body mx-auto mb-10">
          A 100% Moroccan ride-hailing solution designed for the safety, dignity, and prosperity of our drivers and passengers.
        </motion.p>

        <motion.div variants={itemVariants}>
          {/* ✨ UPDATED: Enhanced button with shine effect */}
          <button className="group shine-effect animate-subtle-shine relative inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-blue/30">
            <span>Discover the Vision</span>
            <ArrowIcon />
          </button>
        </motion.div>
      </motion.div>

      {/* ✨ NEW: Animated scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}