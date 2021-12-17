import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './atoms/NextPrevArrow';
import { ItemAuthor } from './ItemAuthor';
import styles from './TopAuthors.module.css';

export const TopAuthors = ({ collections }) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="topAuthors" className={styles.topsAuthor}>
      <div className="container">
        <h2>Top Authors</h2>
        <Slider {...settings} className={styles.slider}>
          {collections.map((author) => (
            <ItemAuthor key={author.id} author={author} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
