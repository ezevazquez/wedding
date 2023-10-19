import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
