import React from 'react';
import Calculator from './Calculator';
import styles from './CalculatorPage.module.css';

export default function CalculatorPage() {
  return (
    <body className={styles.body}>
      <div className={styles.title}>
        <h1>Let&rsquo;s do some math</h1>
      </div>
      <div className={styles.calculator}>
        <Calculator />
      </div>
    </body>
  );
}
