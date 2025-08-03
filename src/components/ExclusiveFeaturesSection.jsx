// src/components/ExclusiveFeaturesSection.jsx

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// This array is now fully updated with the correct image paths from your 'public/photos' folder.
const features = [
  {
    rank: 6,
    title: 'Rihla Comfort+ Tier',
    description: 'An elite experience. Guarantee a top-rated “Pro” driver, a premium vehicle, and in-car amenities like chargers and water, all selectable in-app.',
    imageUrl: '/photos/rank6.jpeg'
  },
  {
    rank: 5,
    title: 'Rihla for Her',
    description: 'A dedicated feature giving female passengers the option to request a ride exclusively from a female driver, providing an unparalleled level of comfort and security.',
    imageUrl: '/photos/rank5.jpeg'
  },
  {
    rank: 4,
    title: 'The "Triple-Check" Shield',
    description: 'Our foundational safety protocol. Every driver is verified through a mandatory three-step process: National ID check, criminal record review, and annual vehicle inspection.',
    imageUrl: '/photos/rank4.jpeg'
  },
  {
    rank: 3,
    title: 'Rihla Guardian™ with Sentry',
    description: 'The ultimate safety net. Assign “Guardians” to monitor your trip’s live location, speed, and ETA, with automatic audio and video recording from our integrated Sentry camera providing a complete, impartial witness.',
    imageUrl: '/photos/rank3.jpeg'
  },
  {
    rank: 2,
    title: 'Integrated Language Translation',
    description: 'With the World Cup and Africa Cup coming to Morocco, communication is key. Our in-app chat provides real-time, automatic translation, connecting our drivers with visitors from around the globe seamlessly.',
    imageUrl: '/photos/rank2.jpeg'
  },
  {
    rank: 1,
    title: 'The Digital Handshake™',
    description: 'The final word in pickup safety. Before getting in, scan the license plate with your phone’s camera. The app confirms the match with a satisfying checkmark, eliminating all uncertainty.',
    imageUrl: '/photos/rank1.jpeg'
  }
];

// This is a sub-component for each feature card.
const FeatureCard = ({ rank, title, description, imageUrl }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center sticky top-0">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Image */}
        <div className="w-full h-80 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
           <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover" 
           />
        </div>
        
        {/* Right Column: Text Content */}
        <div className="text-left">
          <p className="font-display text-8xl md:text-9xl text-white/10 font-bold absolute top-10 right-10 -z-10">#{rank}</p>
          <h3 className="h2-display text-text-primary mb-4">{title}</h3>
          <p className="p-body">{description}</p>
        </div>
      </div>
    </div>
  );
};


export default function ExclusiveFeaturesSection() {
  return (
    <section className="relative bg-brand-dark">
      <div className="section-container text-center">
        <h2 className="h1-display gradient-text">
          Our Top 6 Features
        </h2>
        <p className="p-body mt-4 max-w-3xl mx-auto">
          You will not find these combined in any other ride-hailing app. This is the Rihla difference.
        </p>
      </div>

      <div className="relative h-[600vh]">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.rank}
            rank={feature.rank}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}