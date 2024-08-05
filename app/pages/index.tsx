'use client';

import React from 'react';
import Contador from '../components/Contador';
import Hero from '../components/Hero';
import Map from '../components/Map';

const Index: React.FC = () => {
  const targetDate = '2024-08-18T17:30:00';

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Hero />
        <Contador targetDate={targetDate} />
        <Map />
      </main>
    </div>
  );
};

export default Index;
