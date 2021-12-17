import React from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/header/search.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
          </Link>
          <div className={styles.search}>
            <div className={styles.searchIconContainer}>
              <img src={searchIcon} alt="" />
            </div>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Collection, item or user..."
            />
          </div>

          <div className={styles.menu}>
            <Link to="/">Drops</Link>
            <Link to="/owner">Marketplace</Link>
            <Link to="/item">Create</Link>
          </div>

          <Link to="/" className={styles.loginButton}>
            GET IN
          </Link>
        </div>
      </div>
    </header>
  );
};
