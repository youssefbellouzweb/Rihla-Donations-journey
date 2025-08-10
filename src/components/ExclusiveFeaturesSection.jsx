// src/components/ExclusiveFeaturesSection.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    rank: 6,
    title: "Rihla Comfort+ Tier",
    description:
      "An elite experience. Guarantee a top-rated “Pro” driver, a premium vehicle, and in-car amenities like chargers and water, all selectable in-app.",
    imageUrl: "public/photos/rank6.jpeg",
  },
  {
    rank: 5,
    title: "Rihla for Her",
    description:
      "Female passengers can request a ride exclusively from a female driver, ensuring comfort and security.",
    imageUrl: "public/photos/rank5.jpeg",
  },
  {
    rank: 4,
    title: 'The "Triple-Check" Shield',
    description:
      "Every driver is vetted with ID verification, criminal record checks, and annual vehicle inspections.",
    imageUrl: "public/photos/rank4.jpeg",
  },
  {
    rank: 3,
    title: "Rihla Guardian™ with Sentry",
    description:
      "Family or friends can monitor your trip live, with in-car audio/video recording for full accountability.",
    imageUrl: "public/photos/rank3.jpeg",
  },
  {
    rank: 2,
    title: "Integrated Language Translation",
    description:
      "Our in-app chat auto-translates messages so drivers and passengers can connect without barriers.",
    imageUrl: "public/photos/rank2.jpeg",
  },
  {
    rank: 1,
    title: "The Digital Handshake™",
    description:
      "Scan the license plate before boarding to confirm the correct ride with complete certainty.",
    imageUrl: "public/photos/rank1.jpeg",
  },
];

const FeatureCard = ({ feature, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Motion transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rankScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl px-6">
        
        {/* Image with parallax */}
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          className="w-full h-80 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
        >
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div style={{ opacity: textOpacity }}>
          <motion.p
            style={{ scale: rankScale }}
            className="text-8xl md:text-9xl font-bold text-white/10 mb-4"
          >
            #{feature.rank}
          </motion.p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white/80">{feature.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default function ExclusiveFeaturesSection() {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      {/* Header */}
      <div className="section-container text-center py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h1-display gradient-text"
        >
          Our Top 6 Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="p-body mt-4 max-w-3xl mx-auto text-white/80"
        >
          You won’t find these combined anywhere else. This is the Rihla difference.
        </motion.p>
      </div>

      {/* Desktop: Scroll storytelling */}
      <div className="hidden md:block">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.rank}
            feature={feature}
            index={i}
            total={features.length}
          />
        ))}
      </div>

      {/* Mobile: Swipe carousel */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-10">
        {features.map((feature) => (
          <motion.div
            key={feature.rank}
            whileTap={{ scale: 0.97 }}
            className="snap-center flex-shrink-0 w-80 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="block text-brand-primary font-bold text-lg mb-2">
                #{feature.rank}
              </span>
              <h3 className="text-xl text-white font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
