// src/components/BankTransferModal.jsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

// --- ICONS (Unchanged) ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const BankIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.75 4l.25.5a.5.5 0 01-.25.5H4.5a.5.5 0 01-.25-.5L4.25 4" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.25l.25.5a.5.5 0 01-.25.5h-3.5a.5.5 0 01-.25-.5L8.25 4.25M16.25 4l.25.5a.5.5 0 01-.25.5h-3.5a.5.5 0 01-.25-.5L12.25 4.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 11v2a2 2 0 002 2h14a2 2 0 002-2v-2" /></svg>;
const IbanIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 17h18" /></svg>;
const SwiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

// --- The Animated Letter Component ---
const ScrambledLetter = ({ targetLetter, isVisible }) => {
    const [displayLetter, setDisplayLetter] = useState('');
    const controls = useAnimation();
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    useEffect(() => {
        if (isVisible) {
            const scramble = async () => {
                for (let i = 0; i < 10; i++) {
                    const randomChar = characters[Math.floor(Math.random() * characters.length)];
                    setDisplayLetter(randomChar);
                    await new Promise(res => setTimeout(res, 30));
                }
                setDisplayLetter(targetLetter);
                controls.start({
                    color: '#007AFF',
                    scale: [1, 1.3, 1],
                    transition: { duration: 0.4, ease: 'easeOut' }
                });
            };
            scramble();
        }
    }, [isVisible, targetLetter, controls]);

    return <motion.span animate={controls} className="font-mono text-text-primary">{displayLetter}</motion.span>;
};

// --- The InfoRow Component ---
const InfoRow = ({ label, value, icon, isVisible }) => {
    const [isCopied, copy] = useCopyToClipboard();
    const letters = Array.from(value);
    return (
        <div className="flex items-center py-4 border-b border-white/10">
            <div className="w-8">{icon}</div>
            <span className="flex-1 text-sm text-text-secondary pl-4">{label}</span>
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center">
                    {letters.map((letter, index) => (
                        <ScrambledLetter key={index} targetLetter={letter} isVisible={isVisible} />
                    ))}
                </div>
                <button onClick={() => copy(value)} className={`text-xs bg-white/10 text-white font-bold py-1 px-3 rounded-md transition-all w-24 ${isCopied ? 'bg-brand-blue' : 'hover:bg-white/20'}`}>
                    {isCopied ? 'Copied ✓' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

// --- The Main Modal Component ---
// UPDATED: Accept the onProceed prop
export default function BankTransferModal({ isOpen, onClose, onProceed }) {
    const bankInfo = {
        "Account Holder": "El Hanafi Abbaali",
        "IBAN": "MA64000012345678910111213",
        "Bank Name": "Attijariwafa Bank",
        "SWIFT/BIC": "BCMAMAMC",
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
                            <div className="text-center mb-8">
                                <h2 className="h2-display text-text-primary mb-2">Direct Transfer Details</h2>
                                <p className="p-body text-sm">For your security, please copy the details below precisely for your transfer.</p>
                            </div>

                            <div className="space-y-2 mb-8 bg-black/30 border border-white/10 p-4 rounded-md">
                                <InfoRow icon={<UserIcon />} label="Account Holder" value={bankInfo["Account Holder"]} isVisible={isOpen} />
                                <InfoRow icon={<IbanIcon />} label="IBAN" value={bankInfo.IBAN} isVisible={isOpen} />
                                <InfoRow icon={<BankIcon />} label="Bank Name" value={bankInfo["Bank Name"]} isVisible={isOpen} />
                                <InfoRow icon={<SwiftIcon />} label="SWIFT/BIC" value={bankInfo["SWIFT/BIC"]} isVisible={isOpen} />
                            </div>

                            {/* UPDATED: This button now triggers the next step */}
                            <button onClick={onProceed} className="w-full bg-brand-blue/80 hover:bg-brand-blue text-white font-bold py-3 rounded-lg transition-colors">
                                Done?
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}