import React, { useState } from 'react';
import './carousel.css';
import manual1 from './img/manual1';
import manual2 from './img/manual2';
import manual3 from './img/manual3';
import manual4 from './img/manual4';

const images = [
  { title: 'manual1', img: manual1 },
  { title: 'manual2', img: manual2 },
  { title: 'manual3', img: manual3 },
  { title: 'manual4', img: manual4 },
];
export const Carousel = () => {
  const [activePicture, setActivePicture] = useState(0);
  return (
    <div className="carousel">
      <button
        onClick={() => {
          setActivePicture(activePicture - 1);
        }}
        className="carousel__previous"
        aria-label="previous"
        disabled={activePicture === 0}
      >
        ←
      </button>
      <div className="carousel__media">
        <img className="carousel__image" src={images[activePicture]} />
      </div>
      <button
        onClick={() => {
          if (activePicture === 4) {
            setActivePicture(0);
          } else setActivePicture(activePicture + 1);
        }}
        className="carousel__next"
        aria-label="next"
      >
        →
      </button>
    </div>
  );
};
