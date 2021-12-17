import React from 'react';
import { useNavigate } from 'react-router-dom';
import weth from '../assets/weth.png';
import styles from './CollectionCard.module.css';

export const CollectionCard = ({ token, id, name, traits, image, contract }) => {
  let navigate = useNavigate();

  const handleArticle = () => {
    navigate(`/item/${contract.address}/${token}`);
  };

  return (
    <article className={styles.card} onClick={handleArticle}>
      <div className={styles.thumbnail}>
        <span className={styles.iconFavourite}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <img src={image} alt="" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.id}>#{id}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.ownerCard}>{contract.name} </div>
        <div className={styles.priceContainer}>
          <img src={weth} className={styles.wethImage} alt="" />
          <div className={styles.price}>{traits[0]?.trait_count}</div>
        </div>
      </div>
    </article>
  );
};
