'use client'

import React from 'react';
import Hero from '../components/Hero';
import Contador from '../components/Contador';
import Contador2 from '../components/Contador2';
import { Time } from '../types/types';

const Index: React.FC = () => {
  const targetDate = '2024-08-18T17:30:00';

  return (
    <div>
      <main>
        <Contador targetDate={targetDate} />
      </main>
    </div>
  );
};

export default Index;
