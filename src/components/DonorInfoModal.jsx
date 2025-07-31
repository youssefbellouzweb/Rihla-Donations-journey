// src/components/DonorInfoModal.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function DonorInfoModal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(''); // NEW: State to handle errors gracefully

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setError(''); // Clear previous errors

        const templateParams = {
            from_name: name,
            amount: amount,
            message: reason,
        };
        
        // --- 🚨 IMPORTANT: YOU MUST ADD YOUR REAL EMAILJS KEYS HERE! ---
        const serviceID = 'service_9duonbr';
        const templateID = 'template_no17psg';
        const publicKey = 'TTMXMGvENibZRzv8D';
        // ----------------------------------------------------------------

        // This will fail if the keys above are not correct.
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
               setStatus('sent');
            }, (err) => {
               console.log('FAILED...', err);
               // UPDATED: No more ugly alert(). We now set a clean error message.
               setError('Submission failed. Please check your connection or try again later.');
               setStatus('idle');
            });
    };

    return (
         <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.1, ease: 'easeOut' } }}
                        exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
                        className="relative w-full max-w-2xl bg-brand-dark/80 border border-brand-blue/30 rounded-lg shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,122,255,0.1)_0%,_transparent_60%)]"></div>
                       <div className="p-8 z-10 relative">
                            {status === 'sent' ? (
                                <div className="text-center">
                                    <h2 className="h2-display mb-4">Thank You, {name}!</h2>
                                    <p className="p-body">Your submission for **{amount} MAD** has been received. Your name will be added to the donor list as soon as the transfer is verified. Your support is what makes this vision possible.</p>
                                    <button onClick={onClose} className="mt-8 w-full bg-brand-blue/80 hover:bg-brand-blue text-white font-bold py-3 rounded-lg transition-colors">Close</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="text-center mb-8">
                                        <h2 className="h2-display text-text-primary mb-2">Log Your Contribution</h2>
                                        <p className="p-body text-sm">This information will be displayed on the site once the transfer is verified by the admin.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-text-secondary mb-1">Your Name <span className="text-brand-red">*</span></label>
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 text-white bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-text-secondary mb-1">Amount Donated (in MAD) <span className="text-brand-red">*</span></label>
                                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-4 py-3 text-white bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-text-secondary mb-1">Why do you want to donate? (Optional)</label>
                                            <textarea value={reason} onChange={(e) => setReason(e.target.value)} className="w-full px-4 py-3 text-white bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono h-24 resize-none"></textarea>
                                        </div>
                                    </div>
                                    
                                    {/* NEW: Graceful error message appears here */}
                                    {error && <p className="text-sm text-center text-red-400 mt-4">{error}</p>}
                                    
                                    <button type="submit" disabled={status === 'sending'} className="mt-4 w-full bg-brand-blue/80 hover:bg-brand-blue text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-500 tracking-widest">
                                        {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT DETAILS'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}