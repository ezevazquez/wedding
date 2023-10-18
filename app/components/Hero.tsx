import React from "react";
import styles from "../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero} ${styles['fade-in']}`}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>Love is in the air</h1>
          <p className={styles.subtitle}>
            Por tanto, lo que Dios ha unido, que no lo separe nadie
          </p>
          <p className={styles.subtitle}>Marcos 10:9</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
