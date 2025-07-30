// src/components/ExclusiveFeaturesSection.jsx

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// First, we define the content for our 6 features in an array.
// This makes the main component cleaner.
const features = [
  {
    rank: 6,
    title: 'Rihla Comfort+ Tier',
    description: 'An elite experience. Guarantee a top-rated “Pro” driver, a premium vehicle, and in-car amenities like chargers and water, all selectable in-app.',
    image_placeholder: 'App screenshot showing the Comfort+ booking screen.'
  },
  {
    rank: 5,
    title: 'Driver "Heatmap" Forecaster',
    description: 'We don’t just give drivers trips; we guide them to success. Our AI-powered map predicts where demand will surge, maximizing driver earnings and ensuring ride availability.',
    image_placeholder: 'A sleek, futuristic map with glowing red and orange zones.'
  },
  {
    rank: 4,
    title: 'The "Triple-Check" Shield',
    description: 'Our foundational safety protocol. Every driver is verified through a mandatory three-step process: National ID check, criminal record review, and annual vehicle inspection.',
    image_placeholder: 'A graphic showing the three check icons: ID, Police Record, Vehicle.'
  },
  {
    rank: 3,
    title: 'Rihla Guardian™ with Sentry',
    description: 'The ultimate safety net. Assign “Guardians” to monitor your trip’s live location, speed, and ETA, with automatic audio and video recording from our integrated Sentry camera providing a complete, impartial witness.',
    image_placeholder: 'A phone screen showing a map, with a small picture-in-picture video feed from the in-car camera.'
  },
  {
    rank: 2,
    title: 'Integrated Language Translation',
    description: 'With the World Cup and Africa Cup coming to Morocco, communication is key. Our in-app chat provides real-time, automatic translation, connecting our drivers with visitors from around the globe seamlessly.',
    image_placeholder: 'A chat interface showing a message in English instantly translating to Arabic.'
  },
  {
    rank: 1,
    title: 'The Digital Handshake™',
    description: 'The final word in pickup safety. Before getting in, scan the license plate with your phone’s camera. The app confirms the match with a satisfying checkmark, eliminating all uncertainty.',
    image_placeholder: 'A phone camera view overlaying a digital checkmark on a license plate.'
  }
];

// This is a sub-component for each feature card.
const FeatureCard = ({ rank, title, description, image_placeholder }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center sticky top-0">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Image Placeholder */}
        <div className="w-full h-80 bg-white/5 rounded-2xl flex items-center justify-center p-8 border border-white/10">
           <p className="text-center text-text-secondary">{image_placeholder}</p>
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

      {/* The container for our sticky-scrolling cards */}
      <div className="relative h-[600vh]">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.rank}
            rank={feature.rank}
            title={feature.title}
            description={feature.description}
            image_placeholder={feature.image_placeholder}
          />
        ))}
      </div>
    </section>
  );
}