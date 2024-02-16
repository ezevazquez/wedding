// components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // Importa el componente Image
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>Eze & Agus</h1>
        <h1 className={styles.heroSubtitle}>DOMINGO 18 DE AGOSTO 2024</h1>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/Frame1.png"
            alt="Eze & Agus"
            width={800} // Ancho de la imagen
            height={600} // Alto de la imagen
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
