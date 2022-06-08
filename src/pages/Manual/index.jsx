import React from 'react';
import { Carousel } from '../../components/Carousel';
import './style.css';
import pozor1 from './img/pozor-pink1.png';
import pozor2 from './img/pozor-pink2.png';

export const Manual = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <div className="manual__container">
        <div className="manual__carousel">
          <h1>Jak na to (.)(.)</h1>
          <Carousel />
        </div>
        <div className="manual__image">
          <div className="manual__title">Co může být špatně?</div>
          <div className="manual__text">
            Bulka, jakýkoliv útvar, který předchozí měsíc v prsu hmatný nebyl,
            vpáčená bradavka nebo kůže na prsu, výtok z bradavky, zčervenání
            prsu, změna struktury kůže na prsu, krvácení z kůže okolo bradavky,
            bolest prsu.{' '}
          </div>
          <div className="manual__ifSomethingWrong__images">
            <img className="manual__ifSomethingWrong" src={pozor1} />
            <img className="manual__ifSomethingWrong" src={pozor2} />
          </div>
        </div>
      </div>
    </main>
  );
};
