import React from 'react';

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 9.63 5 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.38 2.4.73 3.54a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.54-1.54a2 2 0 0 1 2.11-.45c1.14.35 2.33.6 3.54.73a2 2 0 0 1 1.72 2z" />
  </svg>
);

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
          <a
            href="mailto:elhanafiabbaali@gmail.com"
            className="group shine-effect animate-subtle-shine relative inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-blue/40 hover:scale-105"
          >
            <EmailIcon />
            Email Me
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/0x_.hf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10 hover:scale-105"
          >
            <InstagramIcon />
            Instagram: 0x_.hf
          </a>

          {/* Phone Button */}
          <a
            href="tel:+212767676856"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white/10 hover:scale-105"
          >
            <PhoneIcon />
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
}
