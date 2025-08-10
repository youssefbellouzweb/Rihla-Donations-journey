import React from "react";
import { motion } from "framer-motion";

const FloatingIcon = ({ children }) => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-blue/30 bg-brand-dark text-brand-blue"
  >
    {children}
  </motion.div>
);

const RequestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
const SmartFareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 7.5h7.5m-7.5 3h7.5m-7.5 3h7.5m3-9l-3.375-3.375A4.5 4.5 0 0012 3.75v16.5M3.375 12.375l-3.375 3.375a4.5 4.5 0 006.364 6.364l1.375-1.375"
    />
  </svg>
);
const DispatchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </svg>
);
const RideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5l1.179-1.677a.625.625 0 01.928-.22l2.39 1.434a.625.625 0 00.928-.22l2.39-4.242a.625.625 0 00-.22-.928L12 11.25M15 12l-3-1.5"
    />
  </svg>
);

const Step = ({ icon, title, children, isLast = false }) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0, 112, 255, 0.2)" }}
    transition={{ type: "spring", stiffness: 150 }}
    className="flex items-start cursor-default"
  >
    <div className="flex flex-col items-center mr-6">
      <FloatingIcon>{icon}</FloatingIcon>
      {!isLast && <div className="w-px h-24 bg-brand-blue/30 mt-4"></div>}
    </div>
    <div className="pt-2">
      <h3 className="font-display text-2xl font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary">{children}</p>
    </div>
  </motion.div>
);

export default function EngineSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className="bg-brand-dark py-24 sm:py-32 relative overflow-hidden">
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-display text-brand-blue text-lg mb-2">How It Works</p>
          <h2 className="h2-display mb-4">The Rihla Engine</h2>
          <p className="p-body">
            Our platform is not just a map with cars on it. It's a vertically
            integrated system designed for fairness, transparency, and
            efficiency at every step.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants}>
            <Step icon={<RequestIcon />} title="1. The Request">
              A user enters their destination. Our system instantly pinpoints
              their location and calculates the optimal route.
            </Step>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Step icon={<SmartFareIcon />} title="2. The Smart Fare">
              The Rihla algorithm analyzes distance, time, traffic, and demand
              to generate a single, fair, fixed price. No haggling.
            </Step>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Step icon={<DispatchIcon />} title="3. Intelligent Dispatch">
              We don't just find the closest driver. We find the *best*
              available driver based on rating, vehicle type, and direction of
              travel to reduce wait times.
            </Step>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Step icon={<RideIcon />} title="4. The Secure Ride" isLast={true}>
              The user and a Triple-Checked driver are connected. The journey
              begins, fully monitored for safety and efficiency.
            </Step>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
