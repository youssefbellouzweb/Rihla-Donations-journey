import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-brand-dark border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} Rihla Technologies. All Rights Reserved.
          </p>
          <p className="font-display text-xl font-semibold text-text-primary">
            Rihla
          </p>
          {/* Uncomment to add social icons later
          <div className="flex space-x-6">
            <a href="https://twitter.com/rihla" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition">
              Twitter
            </a>
            <a href="https://linkedin.com/company/rihla" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition">
              LinkedIn
            </a>
          </div>
          */}
        </div>
      </div>
    </motion.footer>
  );
}
