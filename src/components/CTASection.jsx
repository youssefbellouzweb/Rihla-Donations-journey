import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="bg-brand-blue">
      <div className="section-container text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            The Future is Built By a Few.
            <br />
            Join Us.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            You have seen the vision, the technology, and the strategy. Rihla is not just an app; it's a new standard for transport in Morocco. We are seeking partners who share our ambition to build a dominant, trusted, and profitable ecosystem.
          </p>
          <a
            href="mailto:invest@rihla.ma?subject=Investor Inquiry: Rihla Vision"
            className="group shine-effect animate-subtle-shine relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-blue transition-shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/40"
          >
            Request Investor Details
          </a>
        </motion.div>
      </div>
    </section>
  );
}
