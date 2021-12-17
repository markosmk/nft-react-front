import React from 'react';
import styles from './Loading.module.css';
export const Loading = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.ellipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
