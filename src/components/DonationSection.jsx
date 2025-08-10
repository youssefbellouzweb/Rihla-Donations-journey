// src/components/DonationSection.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import BankTransferModal from "./BankTransferModal";
import DonorInfoModal from "./DonorInfoModal";

export default function DonationSection() {
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isDonorInfoModalOpen, setIsDonorInfoModalOpen] = useState(false);

  const currentAmount = 250;
  const goalAmount = 3500;
  const rawPercentage = (currentAmount / goalAmount) * 100;
  const progressPercentage = Math.min(rawPercentage, 100);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animatedAmount, setAnimatedAmount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startPercent = 0;
      let startAmount = 0;

      const step = () => {
        startPercent += (progressPercentage - startPercent) * 0.08;
        startAmount += (currentAmount - startAmount) * 0.08;
        setAnimatedPercentage(startPercent);
        setAnimatedAmount(startAmount);
        if (Math.abs(startPercent - progressPercentage) > 0.5) {
          requestAnimationFrame(step);
        } else {
          setAnimatedPercentage(progressPercentage);
          setAnimatedAmount(currentAmount);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, progressPercentage, currentAmount]);

  const handleProceedToDonorInfo = () => {
    setIsBankModalOpen(false);
    setIsDonorInfoModalOpen(true);
  };

  return (
    <>
      <section
        id="donation-section"
        className="relative py-24 sm:py-32 overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-black/30 to-brand-purple/20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="section-container relative z-10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2-display mb-4">Help Build Rihla Faster</h2>
            <p className="p-body mb-10 text-white/80">
              I’m investing in a{" "}
              <span className="text-brand-blue font-bold">
                professional development setup
              </span>{" "}
              — including a high-performance workstation, multi-display
              productivity, testing devices, and the specialized tools needed
              for advanced coding, AI integration, and rigorous quality testing.
              <br />
              <br />
              Your contribution fuels the hardware and environment that make
              building Rihla smoother, faster, and more reliable.
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-lg mx-auto">
              <h3 className="font-display text-xl text-center mb-4 text-white">
                Funding Progress
              </h3>
              <div className="w-full bg-black/50 rounded-full h-8 border border-white/10 p-1 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedPercentage}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue h-full rounded-full flex items-center justify-end"
                >
                  <span className="text-white text-xs font-bold pr-2 drop-shadow">
                    {Math.round(animatedPercentage)}%
                  </span>
                  {/* Shimmer */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-white/20 blur-md"
                  />
                </motion.div>
              </div>

              <div className="flex justify-between w-full text-sm text-text-secondary mt-2">
                <span>
                  Raised: ${Math.round(animatedAmount).toLocaleString()}
                </span>
                <span>Goal: ${goalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-12 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsBankModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10"
              >
                Continue via Bank Transfer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <BankTransferModal
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
        onProceed={handleProceedToDonorInfo}
      />
      <DonorInfoModal
        isOpen={isDonorInfoModalOpen}
        onClose={() => setIsDonorInfoModalOpen(false)}
      />
    </>
  );
}
