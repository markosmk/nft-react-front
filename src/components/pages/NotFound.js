import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imageIcon}>
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1>Whoops !Page not Found!</h1>
        <p>Maybe something broke the page, come back to the Homepage</p>
        <Link className={styles.buttonBack} to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
