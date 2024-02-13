// components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // Importa el componente Image
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <Image
          src="/images/hero.jpeg"
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
        />
        <h1 className={styles.heroTitle}>Holis</h1>
      </div>
    </section>
  );
};

export default Hero;