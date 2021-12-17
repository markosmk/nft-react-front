import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { HeaderAuthor } from '../HeaderAuthor';
import { Loading } from '../Loading';
import Collection from '../Collection';

const Owner = () => {
  const [listCards, setListCards] = useState([]);

  let { address } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        `https://api.opensea.io/assets/?asset_contract_address=${address}&order_direction=asc&offset=0&limit=20`
      );
      setListCards(openseaData.data.assets);
    };
    return getMyNfts();
  }, [address]);

  return (
    <>
      <HeaderAuthor addressContact={address} />
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

export default Owner;
