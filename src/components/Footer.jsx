// src/components/Footer.jsx

import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-text-secondary">
                        &copy; {currentYear} Rihla Technologies. All Rights Reserved.
                    </p>
                    <p className="font-display text-xl font-medium text-text-primary mt-4 md:mt-0">
                        Rihla
                    </p>
                </div>
            </div>
        </footer>
    );
}