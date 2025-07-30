// src/components/ContactSection.jsx

import React from 'react';

export default function ContactSection() {
    return (
        <section className="bg-brand-dark py-24 sm:py-32">
            <div className="section-container text-center">
                <h2 className="h2-display mb-4">Let's Build The Future Together</h2>
                <p className="p-body max-w-2xl mx-auto mb-12">
                    I am actively seeking partners and investors who share my passion for innovation and my commitment to building a better future for Morocco. If you believe in this vision, let's connect.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {/* Email Button */}
                    <a href="mailto:elhanafiabbaali@gmail.com" className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105">
                        Email Me
                    </a>
                    {/* Instagram Button */}
                    <a href="https://www.instagram.com/0x_.hf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10">
                        Instagram: 0x_.hf
                    </a>
                    {/* Phone Button */}
                    <a href="tel:+212767676856" className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10">
                        Call Me
                    </a>
                </div>
            </div>
        </section>
    );
}