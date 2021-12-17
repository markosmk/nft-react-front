import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';
import styles from './ItemNft.module.css';

const ItemNft = () => {
  const [asset, setAsset] = useState();
  let { address, token } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        `https://api.opensea.io/api/v1/asset/${address}/${token}/`
      );
      setAsset(openseaData.data);
    };
    return getMyNfts();
  }, [address, token]);

  if (!asset) {
    return <Loading />;
  }

  return (
    <div className="container">
      <button
        className={styles.buttonBack}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={`${asset.image_url}=w600`} alt="" />
        </div>
        <div className={styles.description}>
          <h1>{asset.name}</h1>
          <ul className={styles.bread}>
            <li className={styles.owner}>
              <div className={styles.ownerAvatar}>
                <img src={asset.creator.profile_img_url} alt="" />
              </div>
              <div className={styles.ownerName}>
                Owned by
                <Link to={`/owner/${asset?.asset_contract?.address}`}>
                  {asset?.asset_contract.name}
                </Link>
              </div>
            </li>
            <li className={styles.views}>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              52.1K views
            </li>
            <li className={styles.favorites}>
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
              817 favorites
            </li>
          </ul>

          <div className={styles.details}>
            <div>
              <p>
                <strong>Contract Address:</strong>{' '}
                {asset?.asset_contract.address.substring(0, 25) + '...'}
              </p>
              <p>
                <strong>Token ID:</strong> {asset?.id}
              </p>
              <p>
                <strong>Token Standard:</strong> {asset?.asset_contract.schema_name}
              </p>
              <p>
                <strong>Blockchain:</strong> Ethereum
              </p>
            </div>
            <div>
              <p>{asset.description}</p>
            </div>
          </div>

          <div className={styles.price}>
            <img
              src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
              alt=""
            />
            <span className={styles.priceNumber}>{asset.traits[0].trait_count}</span>
            <span>(${asset.traits[0].trait_count * 369.34})</span>
          </div>

          <div className={styles.actions}>
            <a href="/buy">Buy Now</a>
            <a href="/place">Place Bid</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemNft;
