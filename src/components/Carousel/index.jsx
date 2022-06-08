import React, { useState } from 'react';
import './carousel.css';
import image1 from './img/Carousel1.png';
import image2 from './img/Carousel2.png';
import image3 from './img/Carousel3.png';
import image4 from './img/Carousel4.png';

const images = [
  {
    title: 'Vyšetřuj se pravidelně',
    img: image1,

    text: 'Vyšetřuj se každý měsíc. Vyšetřuj se sama. Proč? Protože Ty sama znáš svá prsa nejlépe. Kdy vyšetřovat? Ideálně 5. - 10. den menstruačního cyklu. Pokud menstruaci nemáš, stanov si jeden stejný den v měsíci.',
  },
  {
    title: 'Začni u zrcadla',
    img: image2,
    text: 'Podívej se na svá prsa v zrcadle. Zvedni ruce nad hlavu a prohlídni si je. Všímej si změny velikosti, tvaru prsu a tvaru bradavky, výtoku z bradavky nebo změny kůže na prsu.',
  },
  {
    title: 'Použij 3 prsty',
    img: image3,

    text: 'Každá máme jiný tvar prsu, proto je ideální vyšetřovat se vleže vždy třemi prsty, levou rukou pravý prs a naopak. Sáhni si na prsa třemi prsty naplocho a třemi krouživými pohyby vyšetřuj - nejprve povrchově, poté postupně přidávej tlak (na jednom místě celkem tři kroušžky). Nezapomeň, že takto je potřeba vyšetřit hrudník od podprsenky do podpaží, až ke klíční kosti. Snaž se nevynechat ani kousek. Po vyšetření celé plochy hrudníku nezapomeň na vyšetření podpaží.',
  },
  {
    title: 'Za měsíc znovu',
    img: image4,

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
          <i class="las la-angle-left"></i>
        </button>
        <div className="carousel__media">
          <div className="carousel__images">
            {/* <img
              className="carousel__number"
              src={images[activePicture].number}
            /> */}
            <img className="carousel__image" src={images[activePicture].img} />
          </div>
          <div className="carousel__text__content">
            <div className="carousel__title">{images[activePicture].title}</div>
            <div className="carousel__text">{images[activePicture].text}</div>
          </div>
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
          <i class="las la-angle-right"></i>
        </button>
      </div>
    </>
  );
};
