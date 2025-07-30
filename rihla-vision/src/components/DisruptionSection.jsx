// src/components/DisruptionSection.jsx

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CrossIcon = () => ( <svg className="h-6 w-6 text-brand-red flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> );
const CheckIcon = () => ( <svg className="h-6 w-6 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> );

const ComparisonRow = ({ title, flawedText, rihlaText, index }) => {
    const rowVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } } };
    return( <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b border-white/10" variants={rowVariants}> <h3 className="md:col-span-1 font-display text-xl text-text-primary">{title}</h3> <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"> <div className="flex items-start gap-3"> <CrossIcon /> <p className="text-text-secondary">{flawedText}</p> </div> <div className="flex items-start gap-3"> <CheckIcon /> <p className="text-text-primary font-semibold">{rihlaText}</p> </div> </div> </motion.div> )
};

export default function DisruptionSection() {
    return (
        <div className="relative bg-brand-dark py-24 sm:py-32">
             <div className="absolute inset-0 -z-10 h-full w-full bg-brand-dark bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
            <div className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="h2-display mb-4">The Old Way vs. The Rihla Way</h2>
                    <p className="p-body"> To win, you don't just compete—you change the game. Here’s a breakdown of why the status quo is failing and why Rihla's model is built for dominance. </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="hidden md:grid md:grid-cols-3 gap-8 mb-4"> <div className="md:col-span-1"></div> <div className="md:col-span-1 text-center font-bold text-brand-red">THE FLAWED MODEL</div> <div className="md:col-span-1 text-center font-bold text-green-500">THE RIHLA STANDARD</div> </div>
                    <motion.div initial="hidden" animate="visible" >
                        <ComparisonRow index={0} title="Business Model" flawedText="High commissions (10-15%+) that penalize hardworking drivers. A model designed to extract value." rihlaText="An ultra-low, transparent commission. A true partnership model designed for driver prosperity." />
                        <ComparisonRow index={1} title="Pricing" flawedText="Stressful, inefficient haggling that wastes time and creates uncertainty for both passengers and drivers." rihlaText="The 'Smart Fare'. An upfront, fixed, and fair price calculated instantly. No games, no stress." />
                        <ComparisonRow index={2} title="Safety & Vetting" flawedText="Minimal background checks and inconsistent vehicle quality. Passenger safety is treated as a liability, not a priority." rihlaText="The 'Triple-Check' Shield. Mandatory criminal record, vehicle inspection, and ID verification. Safety is our core product." />
                        <ComparisonRow index={3} title="Driver Support" flawedText="Offshore, anonymous call centers that don't understand local issues. Drivers are treated as disposable assets." rihlaText="24/7, Morocco-based support staff that speaks Darija. Our drivers are our partners, and we protect them." />
                        <ComparisonRow index={4} title="The Outcome" flawedText="High driver turnover, passenger risk, and a race to the bottom on quality. An unsustainable ecosystem." rihlaText="More money for drivers, lower fares and higher safety for passengers. A profitable, sustainable ecosystem built on trust." />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
