import React from 'react';
import { Carousel } from '../../components/Carousel';
import pozor from './img/pozor-pink.png';
import './style.css';

export const Manual = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <h1>Jak na to (.)(.)</h1>
      <Carousel />
      <div className="manual__image">
        <img className="manual__ifSomethingWrong" src={pozor} />
      </div>
    </main>
  );
};
