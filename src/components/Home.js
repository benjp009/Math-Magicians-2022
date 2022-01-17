import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <h2>Simply the best calculator website</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc in urna maximus, ullamcorper leo at, lobortis massa.
        Nulla fringilla sodales sem a aliquam. Duis id semper elit.
        In purus arcu, vulputate nec lacus in, scelerisque luctus diam.
        Etiam congue ex vitae odio ullamcorper viverra.
        Sed dapibus maximus accumsan. Dictum vestibulum molestie.
      </p>
      <p>
        Donec at porttitor augue. Ut at scelerisque quam.
        Mauris mauris eros, ultricies in imperdiet sed, iaculis non nisl.
        Nam maximus non neque in eleifend. Nam sed justo iaculis,
        maximus leo non, dignissim turpis. Integer condimentum lorem mauris.
        Maecenas dignissim eros nulla, sed consequat nunc venenatis vitae.
        Mauris sed mi mi. Nulla eu nulla mattis, accumsan orci consectetur,
        suscipit nisi.
      </p>
    </div>
  );
}
