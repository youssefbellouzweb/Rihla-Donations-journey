// src/components/ProblemSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

// --- Reusable floating icon wrapper ---
const FloatingIcon = ({ children }) => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex justify-center"
  >
    {children}
  </motion.div>
);

// --- SVG Icons ---
const PriceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.785c0 1.135.845 2.098 1.976 2.192.33.024.66.038 1.001.038h.008c.34-.001.67-.014 1.002-.038 1.13-.094 1.975-1.057 1.975-2.192v-2.785c0-1.135-.845-2.098-1.976-2.192A48.424 48.424 0 0012 8.25zM9.75 16.5a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" />
  </svg>
);

const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M12 7.5V5.25m0 2.25l-2.25-1.313" />
  </svg>
);

const SafetyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.017h-.008v-.017z" />
  </svg>
);

// --- Card Component ---
const ProblemCard = ({ icon, title, children, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2, type: "spring" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 30px rgba(255, 0, 0, 0.15)",
      }}
      className="bg-brand-dark/50 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300"
    >
      <FloatingIcon>{icon}</FloatingIcon>
      <h3 className="font-display text-2xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </motion.div>
  );
};

export default function ProblemSection() {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      {/* 🔥 Soft red glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-black" />
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-brand-red/5 rounded-full blur-2xl" />

      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            className="h2-display mb-4"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } } }}
          >
            The Chaos of the Current System
          </motion.h2>

          <motion.p
            className="p-body mx-auto mb-16 max-w-2xl"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            For passengers and drivers alike, the Moroccan ride-hailing market is a landscape of uncertainty, inefficiency, and unnecessary risk.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProblemCard icon={<PriceIcon />} title="Unpredictable Pricing" index={0}>
              The stress of haggling creates friction. Passengers never know the fair price, and drivers waste time on lowball offers.
            </ProblemCard>
            <ProblemCard icon={<QualityIcon />} title="Inconsistent Quality" index={1}>
              Every ride is a gamble. Vehicle quality, cleanliness, and driver professionalism are completely inconsistent.
            </ProblemCard>
            <ProblemCard icon={<SafetyIcon />} title="A Foundation of Mistrust" index={2}>
              Minimal vetting and a lack of accountability have eroded trust. Safety cannot be an afterthought; it must be the foundation.
            </ProblemCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
