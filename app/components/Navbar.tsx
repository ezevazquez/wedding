// Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.button}>Invitados</button>
    </nav>
  );
};

export default Navbar;
