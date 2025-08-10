// src/components/SolutionSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Floating icon wrapper with gentle float animation
const FloatingIcon = ({ children }) => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="flex justify-start mb-4"
  >
    {children}
  </motion.div>
);

// SVG Icons with bigger size & consistent color
const SmartFareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const QualityStandardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);
const SafetyShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SolutionCard = ({ icon, title, children, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0, 112, 255, 0.2)' }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left transition-shadow duration-300 cursor-default"
    >
      <FloatingIcon>{icon}</FloatingIcon>
      <h3 className="font-display text-2xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </motion.div>
  );
};

export default function SolutionSection() {
  return (
    <section className="bg-brand-dark relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-grid-pattern opacity-20"></div>

      {/* Soft blue glowing background shapes */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-blue/5 rounded-full blur-2xl" />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-left max-w-5xl"
        >
          <motion.p
            className="font-display text-brand-blue text-lg mb-2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.1 } } }}
          >
            Our Solution
          </motion.p>
          <motion.h2
            className="h2-display mb-4"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } } }}
          >
            A System Built on Clarity and Trust
          </motion.h2>

          <motion.p
            className="p-body mb-16"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            Rihla replaces chaos with certainty. We've engineered a platform from the ground up to be fair, reliable, and fundamentally secure.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionCard icon={<SmartFareIcon />} title="The 'Smart Fare' System" index={0}>
              Our algorithm calculates a fair, fixed price upfront. No haggling, no stress, no surprises. Just transparency.
            </SolutionCard>
            <SolutionCard icon={<QualityStandardIcon />} title="The 'Rihla Standard'" index={1}>
              We enforce a mandatory standard for vehicle quality, cleanliness, and driver professionalism. Every ride is a premium experience.
            </SolutionCard>
            <SolutionCard icon={<SafetyShieldIcon />} title="The 'Triple-Check' Shield" index={2}>
              Every driver passes a rigorous verification: National ID, criminal record, and vehicle inspection. Safety is our core feature.
            </SolutionCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
