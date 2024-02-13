'use client'

import { Time } from '../types/types'; // Asumiendo que tengas definido un tipo Time en un archivo types.ts
import styles from '../styles/Testing.module.css';


interface Props {
  time: Time;
}

const CountdownTimer = ({ time }: Props) => {
  return (
    <div className={styles.contador}>
      <div className={styles.valueBox}>
        <div className={styles.value}>{String(time.days)}</div>
        <div className={styles.time}>días</div>
      </div>
      <div className={styles.valueBox}>
        <div className={styles.value}>{String(time.hours)}</div>
        <div className={styles.time}>horas</div>
      </div>
      <div className={styles.valueBox}>
        <div className={styles.value}>{String(time.minutes)}</div>
        <div className={styles.time}>minutos</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
