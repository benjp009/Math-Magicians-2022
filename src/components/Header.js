import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Math Magicians</h1>
      </div>
      <div className={styles.navbar}>
        <p href="/">Home</p>
        <p> | </p>
        <p href="/">Calculator</p>
        <p> | </p>
        <p href="/">Quote</p>
      </div>
    </header>
  );
}
