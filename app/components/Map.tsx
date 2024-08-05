// components/Map.tsx
import React from 'react';
import styles from '../styles/Map.module.css';

const Map: React.FC = () => {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.mapTitle}>Cómo llegar</h2>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8216739267937!2d-59.366366887008944!3d-34.63394645898517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc71f532f2a5b7%3A0xd35cf9bc1d0b89fc!2sEstancia%20El%20Recuerdo!5e0!3m2!1ses-419!2sar!4v1722896504461!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
