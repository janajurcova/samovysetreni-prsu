import React, { useState } from 'react';
import './carousel.css';
import manual1 from './img/manual1.png';
import manual2 from './img/manual2.png';
import manual3 from './img/manual3.png';
import manual4 from './img/manual4.png';

const images = [
  {
    title: 'Vyšetřuj se pravidelně',
    img: manual1,
    text: 'Vyšetřuj se každý měsíc. Vyšetřuj se sama. Proč? Protože Ty sama znáš svá prsa nejlépe. Kdy vyšetřovat? Ideálně 5. - 10. den menstruačního cyklu. Pokud menstruaci nemáš, stanov si jeden stejný den v měsíci.',
  },
  {
    title: 'Začni u zrcadla',
    img: manual2,
    text: 'Podívej se na svá prsa v zrcadle. Zvedni ruce nad hlavu a prohlídni si je. Všímej si změny velikosti, tvaru prsu a tvaru bradavky, výtoku z bradavky nebo změny kůže na prsu.',
  },
  {
    title: 'Použij 3 prsty',
    img: manual3,
    text: 'Každá máme jiný tvar prsu, proto je ideální vyšetřovat se vleže vždy třemi prsty, levou rukou pravý prs a naopak. Sáhni si na prsa třemi prsty naplocho a třemi krouživými pohyby vyšetřuj - nejprve povrchově, poté postupně přidávej tlak (na jednom místě celkem tři kroušžky). Nezapomeň, že takto je potřeba vyšetřit hrudník od podprsenky do podpaží, až ke klíční kosti. Snaž se nevynechat ani kousek. Po vyšetření celé plochy hrudníku nezapomeň na vyšetření podpaží.',
  },
  {
    title: 'Za měsíc znovu',
    img: manual4,
    text: 'Je všechno v pořádku? Raduj se a mrkni na sebe zase za měsíc. Znpokojilo Tě něco? Nepanikař a zajdi za svým gynekologem. Každý útvar neznamená nutně nádor.',
  },
];
export const Carousel = () => {
  const [activePicture, setActivePicture] = useState(0);
  return (
    <>
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
          <img className="carousel__image" src={images[activePicture].img} />
          <div className="carousel__title">{images[activePicture].title}</div>
          <div className="carousel__text">{images[activePicture].text}</div>
        </div>
        <button
          onClick={() => {
            if (activePicture === 3) {
              setActivePicture(0);
            } else setActivePicture(activePicture + 1);
          }}
          className="carousel__next"
          aria-label="next"
        >
          →
        </button>
      </div>
    </>
  );
};
