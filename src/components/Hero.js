import React from 'react';
import styles from './Hero.module.css';
import heroImg from './../assets/hero.png';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam
              consectetur recusandae veritatis, natus incidunt hic mollitia ea quibusdam
              nulla similique iusto deserunt suscipit assumenda repudiandae sed et facere
              dicta!
            </p>
            <div className={styles.buttons}>
              <a href="#topAuthors">View Market</a>
              <a href="#topAuthors">Upload your item</a>
            </div>
          </div>
          <div className={styles.thumb}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
