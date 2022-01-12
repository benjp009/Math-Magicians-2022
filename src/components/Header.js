import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Math Magicians</h1>
        </div>
        <div className={styles.navbar}>
          <nav>
            <Link className={styles.link} to="/">Home</Link>
            {'  |  '}
            <Link className={styles.link} to="/calculator">Calculator</Link>
            {'  |  '}
            <Link className={styles.link} to="/quote">Quote</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
