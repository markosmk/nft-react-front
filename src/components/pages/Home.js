import React, { useState, useEffect } from 'react';
import { Features } from '../Features';
import { Hero } from '../Hero';
import Collection from '../Collection';
import { TopAuthors } from '../TopAuthors';
import { Loading } from '../Loading';
import { getOWner } from '../../services/api';
import authorCollections from '../../mock/collections';

const Home = () => {
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getMyNfts = async () => {
      const random = Math.floor(Math.random() * authorCollections.length);
      const address = authorCollections[random].address;
      const openseaData = await getOWner(address);
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
