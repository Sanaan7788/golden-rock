// import React from 'react';
// import Navbar from './components/Navbar';
// import VideoSection from './components/VideoSection';
// import ServicesSection from './components/ServicesSection';
// import AboutUsSection from './components/AboutUsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-cream">
//       <Navbar />
//       {/* Add padding-top to account for fixed navbar */}
//       <main className="flex-grow pt-16">
//         {/* <VideoSection /> */}
//         <AboutUsSection />
//         <ServicesSection />
//         <ContactSection />
//         {/* Other sections will be added here */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import TrainingSection from './components/TrainingSection';
import IndustryInfoSection from './components/IndustryInfoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <TrainingSection />
        <IndustryInfoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;