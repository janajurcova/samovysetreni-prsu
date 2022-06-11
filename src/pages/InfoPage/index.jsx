import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/Blogo-transparent.png';
import logoMen from '../../img/BlogoMen.png';

export const InfoPage = () => {
  return (
    <div className="info__body">
      <div className="info__container">
        <div className="info__header">
          <h1 className="info__title">Aplikace Samovyšetření prsu</h1>
          <h2 className="info__subTitle">"Touch me if you can"</h2>
        </div>
        <p className="info__paragraph">
          vznikla pod záštitou Bellis
          <a className="info__link" href="https://www.bellisky.cz/"></a>, mladé
          ženy s rakovinou prsu během Digitální akademie Czechitas 2022{' '}
          <a className="info__link" href="https://www.czechitas.cz/"></a>.
        </p>
        <section className="info__section">
          <h2 className="info__subTitle">Účel Aplikace</h2>
          <p className="info__paragraph">
            Plánování samovyšetření i diagnostické vyšetření prsou přesně podle
            návodu a podle délky cyklu ženy. Stačí si přečíst "Jak na to" a v
            kalendáři nastavit první vyšetření s periodu opakování.
          </p>
        </section>
        <section className="info__section">
          <h2 className="info__subTitle">Co můžeš udělat víc?</h2>
          <p className="info__paragraph">
            Zapoj svého partnera! Zhruba v 30% případů změny objeví partner.
            Proč si tedy z vyšetření neudělat společný každoměsíční rituál?
            Aplikace umožňuje změnu designu, aby byla pro partnera
            příjemnější...a nabádá nás stejně "Touch me, if you can".
          </p>
        </section>
        <section className="info__section">
          <h2 className="info__subTitle">Co můžeš v aplikaci hledat?</h2>
          <p className="info__paragraph">
            V sekci "Jak na to" najdeš návod na to jak se vyšetřit, i na co si
            dávat pozor. Pokud vše nevypadá jak by si chtěla, máme tu rozcestník
            co dělat dál.{' '}
          </p>
        </section>
        <section className="info__section">
          <h2 className="info__subTitle">Je nutná registrace?</h2>
          <p className="info__paragraph">
            Není, aplikace funguje lokálně jen ve tvém prohlížeči nebo zařízení.
            Nemusíš tak sdílet data s nikým dalším. Z druhé strany ale nejsou
            tvá data přenosná. Jedná se o experimet, tak měj pochopení, že musíš
            notifikace odsouhlasit aby mohly přijít.
          </p>
        </section>
        <section className="info__section">
          <h2 className="info__subTitle">O nás, autorkách aplikace</h2>
          <p className="info__paragraph">
            Jsme dvě mladé ženy, které jsou ve světě IT teprve krátce. Aplikace
            vznikla jako závěrečný projekt na Digitální akademii neziskové
            organizace Czechitas. Obě jsme chtěly vytvořit něco, co bude mít
            přesah a smysl, a k onkologické prevenci máme obě osobní důvody.
            Naše aplikace není dokonalá, proto měj prosím pochopení. O stažení
            aplikace do mobilu si prosím přečti níže. Více o nás a projektu si
            můžete přečíst zde (link). Iveta & Jana
          </p>
        </section>
        <section className="info__section">
          <h2 className="info__subTitle">Stažení aplikace do mobilu</h2>
          <p className="info__paragraph">
            Pokud máš mobil s operačním systémem android, objevuje se Ti
            tlačítko na stažení automaticky. Bohužel u iOS operačního systému se
            tlačítko neobjevuje a proto je potřeba udělat následující kroky: 1.
            Naši stránku si otevři v prohlížeči Safari. 2. Dole v navigační
            listě klikni na obrázek čtverečku se šipkou nahoru (hned uprostřed).
            3. V nabídce dole vyber "Přidat na plochu" a potvrď. Teď už by se Ti
            měla růžová ikona aplice objevit na ploše Tvého mobilu.
          </p>
        </section>
      </div>
    </div>
  );
};