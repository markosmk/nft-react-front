import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderAuthor } from '../HeaderAuthor';
import { Loading } from '../Loading';
import Collection from '../Collection';
import { getOWner } from '../../services/api';

const Owner = () => {
  const [listCards, setListCards] = useState([]);

  let { address } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await getOWner(address);
      setListCards(openseaData.data.assets);
    };
    return getMyNfts();
  }, [address]);

  return (
    <>
      <HeaderAuthor addressContact={address} />
      {listCards.length > 0 ? <Collection listCards={listCards} /> : <Loading />}
    </>
  );
};

export default Owner;
