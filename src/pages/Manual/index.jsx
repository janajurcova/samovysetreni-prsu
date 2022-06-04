import React from 'react';
import { Carousel } from '../../components/Carousel';
import pozor from './img/pozor-pink.png';
import './style.css';

export const Manual = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <div className="manual__container">
        <h1>Jak na to (.)(.)</h1>
        <Carousel />
        <div className="manual__image">
          <div className="manual__title">Co může být špatně?</div>
          <div className="manual__text">
            Bulka, jakýkoliv útvar, který předchozí měsíc v prsu hmatný nebyl,
            vpáčená bradavka nebo kůže na prsu, výtok z bradavky, zčervenání
            prsu, změna struktury kůže na prsu, krvácení z kůže okolo bradavky,
            bolest prsu.{' '}
          </div>
          <img className="manual__ifSomethingWrong" src={pozor} />
        </div>
      </div>
    </main>
  );
};
