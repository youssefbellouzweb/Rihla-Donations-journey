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

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <EngineSection />
      <DisruptionSection />
      <ExclusiveFeaturesSection />
      <AboutMeSection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
export default App;