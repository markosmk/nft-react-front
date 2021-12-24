import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Features } from '../Features';
import { Hero } from '../Hero';
import Collection from '../Collection';
import { TopAuthors } from '../TopAuthors';
import authorCollections from '../../mock/collections';
import { Loading } from '../Loading';

const Home = () => {
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getMyNfts = async () => {
      const random = Math.floor(Math.random() * authorCollections.length);
      const ide = authorCollections[random].address;
      const openseaData = await axios.get(
        `https://api.opensea.io/assets/?asset_contract_address=${ide}&order_direction=asc&offset=0&limit=20`,
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY,
          },
        }
      );
      setListCards(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <TopAuthors collections={authorCollections} />
      {listCards.length > 0 ? (
        <>
          <Collection listCards={listCards} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
