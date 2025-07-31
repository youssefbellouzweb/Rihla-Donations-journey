// src/components/BankTransferModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const InfoRow = ({ label, value }) => {
    const [isCopied, copy] = useCopyToClipboard();
    return (
        <div className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-sm text-text-secondary">{label}</span>
            <div className="flex items-center gap-4">
                <span className="font-mono text-text-primary">{value}</span>
                <button onClick={() => copy(value)} className="text-xs bg-white/10 hover:bg-white/20 text-white font-bold py-1 px-3 rounded-md transition-all w-20">
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default function BankTransferModal({ isOpen, onClose }) {
    const bankInfo = {
        "Account Holder": "El Hanafi Abbaali",
        "IBAN": "MA64 0000 1234 5678 9101 1121 3", // Placeholder
        "Bank Name": "Attijariwafa Bank", // Placeholder
        "SWIFT/BIC": "BCMAMAMC", // Placeholder
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-lg bg-brand-dark border border-white/10 rounded-2xl shadow-2xl p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <h2 className="h2-display mb-2">Direct Bank Transfer</h2>
                            <p className="p-body mb-6">Your direct support is critical. Please use the details below to complete the transfer via your banking app.</p>
                        </div>
                        <div className="space-y-2 mb-6">
                            <InfoRow label="Account Holder" value={bankInfo["Account Holder"]} />
                            <InfoRow label="IBAN" value={bankInfo.IBAN} />
                            <InfoRow label="Bank Name" value={bankInfo["Bank Name"]} />
                            <InfoRow label="SWIFT/BIC" value={bankInfo["SWIFT/BIC"]} />
                        </div>
                        <button onClick={onClose} className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">Done</button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}