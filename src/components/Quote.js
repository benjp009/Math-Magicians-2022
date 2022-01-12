import React from 'react';
import styles from './Quote.module.css';

export default function Quote() {
  return (
    <div className={styles.background}>
      <p>
        Mathematics is not about numbers, equations,
        computations, or algorithms; it is about understanding.
        -William Paul Thurston
      </p>
    </div>
  );
}
