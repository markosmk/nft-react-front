import { useNavigate } from 'react-router-dom';
import imgProfile from '../assets/profile.png';
import styles from './ItemAuthor.module.css';

export const ItemAuthor = ({ author: { name, address, img } }) => {
  let navigate = useNavigate();

  const handleOwner = () => {
    navigate(`/owner/${address}`);
  };

  return (
    <div className={styles.author} onClick={handleOwner}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={img || imgProfile} alt="" />
        </div>
        <div className={styles.details}>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
