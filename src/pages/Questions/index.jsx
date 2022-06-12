import React from 'react';
import './style.css';
import { useState } from 'react';

const Question = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={open ? 'active accordion' : 'accordion'}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        {open ? (
          <i className="las la-angle-up"></i>
        ) : (
          <i className="las la-angle-down"></i>
        )}
      </button>
      <div className={open ? 'active panel' : 'panel'}>{children}</div>
    </>
  );
};

export const Questions = () => {
  return (
    <main className="questions-main" >
      <h1>Co dělat, když...</h1>
      <div className="questions">
        <Question title="1 - Něco se ti nezdá">
            Navštiv svého gynekologa nebo praktického lékaře a požádej o
            doporučení na mamologii…Dej si pozor, aby šlo o akreditované
            centrum. - seznam akreditovaných mamocenter
            <ul>
              <li>
                <a href="https://www.mamo.cz/centra/">www.mamo.cz/centra</a>
              </li>
            </ul>
        </Question>

        <Question title="2 - Jsi zmatená z výsledků a nevíš co dál?">
            Využij “second opinion”. Máš nárok na názor dalšího odborníka. -
            seznam kompletních onko center - česká onko společnost
            <ul>
              <li>
                <a href="https://www.linkos.cz/lekar-a-multidisciplinarni-tym/narodni-onkologicka-sit/prehled-komplexnich-onkologickych-center-cr/">
                  www.linkos.cz
                </a>
              </li>
            </ul>
        </Question>

        <Question title="3 - Špatné výsledky? To je nám líto, ale vše zvládneš!">
            Začátky bývají často náročnější, neboj se říct si o pomoc! -
            psychoonkologická pomoc
            <ul>
              <li>
                {' '}
                <a href="ttps://www.linkos.cz/pacient-a-rodina/pomoc-v-nemoci/psychologicka-pomoc/">
                  www.linkos.cz/pacient-a-rodina/pomoc-v-nemoci/psychologicka-pomoc/
                </a>
              </li>
            </ul>
            Pomohl by ti onkopsycholog na telefonu? Zavolej na Avon linku za
            zdravá prsa. - psychologická poradna Avon linka Linka (na čísle 800
            546 546) nabízí i psychologické poradenství, pro které je vyhrazena
            středa od 16 do 18 hodin. Je zaměřeno na pomoc v náročné životní
            situaci spojené s diagnózou onkologického onemocnění, tj. při
            zvládání stresu a emocí a řešení akutních psychických či vztahových
            problémů.
        </Question>

        <Question title="4 - Nejsi v tom sama. Nech si pomoct a mluv o tom.">
            {' '}
            - pacientské organizace - Bellis - mladé ženy s rakovinou prsu,
            Aliance žen s rakovinou prsu o.p.s., Avon linka za zdravá prsa
            <ul>
              <li>
                {' '}
                <a href="https://www.bellisky.cz/">www.bellisky.cz</a>
              </li>
              <li>
                {' '}
                <a href="https://www.breastcancer.cz/">
                  www.breastcancer.cz
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="https://www.zdravaprsa.cz/avon-linka-proti-rakovine-prsu-slavi-10-let/">
                  www.zdravaprsa.cz/avon-linka-proti-rakovine-prsu-slavi-10-let/
                </a>
              </li>
            </ul>
            Avon linka poskytuje na čísle 800 546 546 zdarma od pondělí do pátku
            (10–18 hodin). Je určena všem, kteří potřebují poradit ohledně
            onemocnění a prevence rakoviny prsu. Poradenství je anonymní a
            poskytují jej ženy, které zvládly náročnou léčbu této nemoci. Dotazy
            je možné zasílat i e-mailem na zazdravaprsa@breastcancer.cz{' '}
        </Question>

        <Question title="5 - Napiš si o knihu Nejsi na to sama - průvodce rakovinou prsu.">
            Autorkami jsou mladé ženy, které zažily to, co ty. V knize najdeš
            spoustu důležitých informací. - Nejsi na to sama - kniha
            <ul>
              <li>
                <a href="https://www.bellisky.cz/projekty-a-akce/kniha-nejsi-na-to-sama-pruvodce-rakovinou-prsu/">
                  www.bellisky.cz/projekty-a-akce/kniha-nejsi-na-to-sama-pruvodce-rakovinou-prsu/
                </a>
              </li>
            </ul>
        </Question>

        <Question title="6 - Řešíš ekonomickou situaci během léčby?">
            Nech si pomoci a poradit od odborníků z Amelie z.s. - socioekonom
            Amelie
            <ul>
              <li>
                <a href="https://www.amelie-zs.cz/">www.amelie-zs.cz</a>
              </li>
            </ul>
        </Question>
      </div>
    </main>
  );
};
