'use client'

import { useState, useEffect } from 'react';
import styles from '../styles/Contador.module.css';

interface Props {
  targetDate: string; // La fecha objetivo en formato ISO (ejemplo: '2024-12-31T23:59:59')
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Contador: React.FC<Props> = ({ targetDate }) => {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

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

export default Contador;
