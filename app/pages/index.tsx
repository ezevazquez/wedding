'use client'

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contador from '../components/Contador';

const Index: React.FC = () => {
  const targetDate = '2024-10-10T20:00:00';

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Contador targetDate={targetDate} />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
