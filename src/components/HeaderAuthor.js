import React from 'react';
import styles from './HeaderAuthor.module.css';
import authorCollections from '../mock/collections';
import imgProfile from '../assets/profile.png';

export const HeaderAuthor = ({ addressContact }) => {
  const owner = authorCollections.find((item) => item.address === addressContact);

  const { name, address, img } = owner;

  return (
    <section className={styles.author}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <div className={styles.avatar}>
              <img src={img || imgProfile} alt="" />
            </div>
            <div className={styles.owner}>
              <h3>{name}</h3>
              <p>@{name.replace(' ', '_').toLowerCase()}</p>
              <p>{address}</p>
            </div>
          </div>
          <div className={styles.buttonFollow}>
            <a href="/">Follow</a>
          </div>
        </div>
      </div>
    </section>
  );
};
