import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className="container">
          <div className={styles.infoContent}>
            <div className={styles.description}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <p>
                The world’s first and largest digital marketplace for crypto collectibles
                and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital
                items.
              </p>
            </div>

            <div className={styles.links}>
              <h3>Marketplace</h3>
              <ul>
                <li>
                  <Link to="/">All Nfts</Link>
                </li>
                <li>
                  <Link to="/">New</Link>
                </li>
                <li>
                  <Link to="/">Trading Cards</Link>
                </li>
              </ul>
            </div>

            <div className={styles.links}>
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">News letter</Link>
                </li>
              </ul>
            </div>

            <div className={styles.links}>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Connect Wallet</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className="container">
          <div className={styles.copyContent}>
            <p>
              © Copyright {new Date().getFullYear()} - Created with 🧡 by{' '}
              <a href="https://markosmk.com">markosmk</a>.
            </p>
            <p>
              <Link to="/policy">Policy Privacy</Link>
              <Link to="/terms">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
