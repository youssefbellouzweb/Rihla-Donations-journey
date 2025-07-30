// src/components/DonationSection.jsx

import React from 'react';

export default function DonationSection() {
  // --- MANUAL DONATION TRACKING ---
  const currentAmount = 250; 
  const goalAmount = 3500;   
  // ------------------------------------

  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <section id="donation-section" className="bg-black/20 py-24 sm:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2-display mb-4">Project Funding Goal</h2>
          <p className="p-body mb-10">
            To accelerate the development of Rihla, I'm raising funds for a high-performance MacBook Pro capable of handling the intensive coding, 3D rendering, and AI modeling required. Your contribution directly funds the tools needed to build this world-class application.
          </p>
          
          {/* Donation Progress Bar */}
          <div className="w-full max-w-lg mx-auto">
            <h3 className="font-display text-xl text-center mb-4">Laptop Funding Progress</h3>
            <div className="w-full bg-black/50 rounded-full h-8 border border-white/10 p-1">
              <div
                className="bg-brand-blue h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end"
                style={{ width: `${progressPercentage}%` }}
              >
                 <span className="text-white text-xs font-bold pr-2">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
            <div className="flex justify-between w-full text-sm text-text-secondary mt-2">
              <span>Raised: ${currentAmount.toLocaleString()}</span>
              <span>Goal: ${goalAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a href="https://buy.stripe.com/link_to_your_product" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-blue transition-transform duration-300 ease-in-out hover:scale-105">
              Contribute via Stripe
            </a>
             <a href="#" className="flex-1 sm:flex-none text-center group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10">
              Bank Transfer Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}