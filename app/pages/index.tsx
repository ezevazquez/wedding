'use client'

import React from 'react';
import Contador from '../components/Contador';
import Hero from '../components/Hero';

const Index: React.FC = () => {
  const targetDate = '2024-08-18T17:30:00';

  return (
    <div>
      <main>
        <Hero />
        <Contador targetDate={targetDate} />
      </main>
    </div>
  );
};

export default Index;
