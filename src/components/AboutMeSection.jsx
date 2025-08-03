// src/components/AboutMeSection.jsx

import React from 'react';

export default function AboutMeSection() {
    
    // Function for smooth scrolling to the new donation section
    const scrollToDonation = () => {
        const element = document.getElementById('donation-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="about-founder" className="bg-brand-dark border-y border-white/10 py-24 sm:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Your Story */}
          <div className="text-left">
            <p className="font-display text-brand-blue text-lg mb-2">The Visionary</p>
            <h2 className="h2-display mb-4">About the Founder</h2>
            <p className="p-body">
              My name is El Hanafi Abbaali. Two years ago, I was a candidate at the coding school 1337, and for my entire life, I've been driven by a passion for development. But this isn't just about code; it's about being a game-changer for my country.
              <br/><br/>
              My dream is to build a major tech company from scratch that pushes Morocco forward. Rihla is the start of that dream. It is my answer to a market that deserves better and my commitment to building world-class solutions, right here at home.
            </p>
          </div>

          {/* Right Column: Photo and the new button */}
          <div className="flex flex-col items-center text-center">
             <div className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-brand-blue/50 overflow-hidden">
                <img 
                    src="public/photos/ffff.jpeg" // <-- This path is now updated
                    alt="Photo of El Hanafi Abbaali"
                    className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-display text-xl mb-4">Help Accelerate Development</h3>
              <p className="text-text-secondary max-w-sm mb-8">
                Your support can provide the essential tools needed to bring this vision to life faster.
              </p>
              <button 
                onClick={scrollToDonation}
                className="group shine-effect animate-subtle-shine relative inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-blue/30"
              >
                Support the Vision
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}