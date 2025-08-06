// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import EngineSection from './components/EngineSection';
import DisruptionSection from './components/DisruptionSection';
import ExclusiveFeaturesSection from './components/ExclusiveFeaturesSection';
import AboutMeSection from './components/AboutMeSection';
import DonationSection from './components/DonationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// This wrapper adds the necessary IDs to your sections.
const Section = ({ id, children }) => (
  <section id={id}>{children}</section>
);

function App() {
  return (
    // Added top padding to push content below the fixed navbar
    <main className="w-full overflow-x-hidden pt-24 md:pt-32">
      <Navbar />
      
      {/* Each section is now wrapped with an ID that the Navbar links can target */}
      <Section id="hero"><Hero /></Section>
      <Section id="problem"><ProblemSection /></Section>
      <Section id="solution"><SolutionSection /></Section>
      <Section id="engine"><EngineSection /></Section>
      <Section id="disruption"><DisruptionSection /></Section>
      <Section id="features"><ExclusiveFeaturesSection /></Section>
      <Section id="about-me"><AboutMeSection /></Section>
      <Section id="donation"><DonationSection /></Section>
      <Section id="contact"><ContactSection /></Section>
      
      <Footer />
    </main>
  );
}
export default App;