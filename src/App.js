import React from 'react';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <VideoSection />
        <ServicesSection />
        <AboutUsSection />
        <ContactSection />
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;