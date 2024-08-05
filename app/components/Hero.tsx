// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>Eze & Agus</h1>
        <h1 className={styles.heroSubtitle}>DOMINGO 18 DE AGOSTO 2024</h1>
        <div className="">
          <Image
            src="/images/Frame1.png"
            alt="Eze & Agus"
            layout="responsive"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
