import React, { useState } from 'react';
import './carousel.css';
import image1 from './img/Carousel1.png';
import image2 from './img/Carousel2.png';
import image3 from './img/Carousel3.png';
import image4 from './img/Carousel4.png';
import { useContext } from 'react';
import { ThemeContext } from '../../index';


const images = [
  {
    title1: 'Vyšetřuj se pravidelně',
    title2: 'Pomáhej ji pravidelně',
    img: image1,

    text1: 'Vyšetřuj se každý měsíc. Vyšetřuj se sama. Proč? Protože Ty sama znáš svá prsa nejlépe. Kdy vyšetřovat? Ideálně 5. - 10. den menstruačního cyklu. Pokud menstruaci nemáš, stanov si jeden stejný den v měsíci.',
    text2: 'Pomoz ji s vyšetřením, ale jen pokud bude sama chtít. Zhruba ve 30% případů si změn všimne první partner, ale ona se zná stejně nejlépe. Pokud by ji tvá pomoc potěšila, zeptej se, na které datum si máš nastavit upozornění. Ber to jako každoměsíční rituál, který si spolu užijete.'
  },
  {
    title1: 'Začni u zrcadla',
    title2: 'Nejdřív se jen podívej',
    img: image2,

    text1: 'Podívej se na svá prsa v zrcadle. Zvedni ruce nad hlavu a prohlídni si je. Všímej si změny velikosti, tvaru prsu a tvaru bradavky, výtoku z bradavky nebo změny kůže na prsu.',
    text2: 'První se na její prsa podívej a všímej si změn velikosti, tvaru prsu, bradavky nebo změny barvy kůže. Nejlíp se změny pozorují, když zvedne ruce nad hlavu.'
  },
  {
    title1: 'Použij 3 prsty',
    title2: 'Použij 3 prsty',
    img: image3,

    text1: 'Každá máme jiný tvar prsu, proto je ideální vyšetřovat se vleže vždy třemi prsty, levou rukou pravý prs a naopak. Sáhni si na prsa třemi prsty naplocho a třemi krouživými pohyby vyšetřuj - nejprve povrchově, poté postupně přidávej tlak (na jednom místě celkem tři kroužky). Nezapomeň, že takto je potřeba vyšetřit hrudník od podprsenky do podpaží, až ke klíční kosti. Snaž se nevynechat ani kousek. Po vyšetření celé plochy hrudníku nezapomeň na vyšetření podpaží.',
    text2: 'Vyšetření samotné je nejlepší vleže pomocí tří prstů. Zkus to třemi krouživými pohyby - vyšetřuj nejprve povrchově, poté postupně přidávej tlak (na jednom místě celkem tři kroužky). Nezapomeň, že takto je potřeba vyšetřit hrudník od podprsenky do podpaží, až ke klíční kosti. Po vyšetření celé plochy hrudníku nezapomeň na vyšetření podpaží.'
  },
  {
    title1: 'Za měsíc znovu',
    title2: 'A za měsíc znovu',
    img: image4,

    text1: 'Je všechno v pořádku? Raduj se a mrkni na sebe zase za měsíc. Znpokojilo Tě něco? Nepanikař a zajdi za svým gynekologem. Každý útvar neznamená nutně nádor.',
    text2: 'Je všechno v pořádku? Radujte se a oslavte to společně. Je to totiž vždycky skvělá zpráva. Pokud by tě cokoli znepokojilo nepanikař, ale doprovoď ji ke gynekologovi a buď s ní.'
  },
];


export const Carousel = () => {
  const [activePicture, setActivePicture] = useState(0);
  const theme = useContext(ThemeContext);
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
          <i className="las la-angle-left"></i>
        </button>
        <div className="carousel__media">
          <div className="carousel__images">
            <img className="carousel__image" src={images[activePicture].img} />
          </div>
          <div className="carousel__text__content">
            <div className="carousel__title">{theme === 'women' ? images[activePicture].title1 : images[activePicture].title2}</div>
            <div className="carousel__text">{theme === 'women' ? images[activePicture].text1 : images[activePicture].text2}</div>
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
          <i className="las la-angle-right"></i>
        </button>
      </div>
    </>
  );
};
