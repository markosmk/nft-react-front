import React from 'react';
import styles from './Features.module.css';

export const Features = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.feature}>
            <div className={styles.content}>
              <h4 className={styles.title}>Set up your wallet</h4>
              <p className={styles.paragraph}>
                Once you have set up your wallet of choice, connect it to us by clicking
                the wallet icon for to start discovering interesting things.
              </p>
              <div className={styles.iconBack}>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.content}>
              <h4 className={styles.title}>Add your NFTs</h4>
              <p className={styles.paragraph}>
                Upload your work, add a tutile and description, and customize your NFTs
                with properties, stats, and unlockable content.
              </p>
              <div className={styles.iconBack}>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.content}>
              <h4 className={styles.title}>List them for sale</h4>
              <p className={styles.paragraph}>
                Choose between auctions and fixed-price listings. You choose how you want
                to sell your NFTs, and we help you sell them!
              </p>
              <div className={styles.iconBack}>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
