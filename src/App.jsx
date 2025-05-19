import React from 'react';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import OurWorks from './sections/OurWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <WhatWeDo />
      <OurWorks />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
