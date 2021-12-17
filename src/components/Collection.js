import React from 'react';
import { CollectionCard } from './CollectionCard';
import styles from './Collection.module.css';

const Collection = ({ listCards }) => {
  return (
    <div className="container">
      <h2 className={styles.title}>List NFTs</h2>
      <div className={styles.cardList}>
        {listCards.map((item) => (
          <CollectionCard
            key={item.id}
            token={item.token_id}
            id={item.id}
            name={item.name}
            traits={item.traits}
            image={item.image_preview_url || item.owner.profile_img_url}
            contract={item.asset_contract}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
