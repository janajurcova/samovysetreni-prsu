import React from 'react';
import './style.css';

export const InfoPage = () => {
  <body className="info__body">
    <header className="info__container">
      <h1 className="info__title">Aplikace Samovyšetření prsu</h1>
      <h2 className="infro__subTitle">"Touch me if you can"</h2>
    </header>
    <p className="info__paragraph">
      vznikla pod záštitou Bellis
      <a className="info__link" href="https://www.bellisky.cz/"></a>, mladé ženy
      s rakovinou prsu během Digitální akademie Czechitas 2022{' '}
      <a className="info__link" href="https://www.czechitas.cz/"></a>.
    </p>
    <section className="info__section">
      <h2 className="infro__subTitle">Účel Aplikace</h2>
      <p className="info__paragraph">
        Plánování samovyšetření i diagnostické vyšetření prsou přesně podle
        návodu a podle délky cyklu ženy. Stačí si přečíst "Jak na to" a v
        kalendáři nastavit první vyšetření s periodu opakování.
      </p>
    </section>
    <section>
      <h2 className="infro__subTitle">Co můžeš udělat víc?</h2>
      <p className="info__paragraph">
        Zapoj svého partnera! Zhruba v 30% případů změny objeví partner. Proč si
        tedy z vyšetření neudělat společný každoměsíční rituál? Aplikace
        umožňuje změnu designu, aby byla pro partnera příjemnější...a nabádá nás
        stejně "Touch me, if you can".
      </p>
    </section>
    <section>
      <h2 className="infro__subTitle">Co můžeš hledat?</h2>
      <p className="info__paragraph">
        V sekci "Jak na to" najdeš návod na to, jak se vyšetřit, i na co si
        dávat pozor. Pokud něco nevypadá jak bys chtěla, máme tu rozcestník co
        dělat dál.{' '}
      </p>
    </section>
    <section>
      <h2 className="infro__subTitle">Je nutná registrace?</h2>
      <p className="info__paragraph">
        Není, aplikace funguje lokálně jen ve tvém prohlížeči nebo zařízení.
        Nemusíš tak sdílet data s nikým dalším. Z druhé strany ale nejsou tvá
        data přenosná. Jedná se o experimet, tak měj pochopení, že musíš
        notifikace odsouhlasit aby mohly přijít.
      </p>
    </section>
    <section>
      <h2 className="infro__subTitle">O nás, autorkách aplikace</h2>
      <p className="info__paragraph">
        Jsme dvě mladé ženy, které jsou ve světě IT teprve krátce. Aplikace
        vznikla jako závěrečný projekt na Digitální akademii neziskové
        organizace Czechitas. Obě jsme chtěly vytvořit něco, co bude mít přesah
        a smysl, a k onkologické prevenci máme obě osobní důvody. Naše aplikace
        není dokonalá, proto mějte prosím pochopení. Více o nás a projektu si
        můžete přečíst zde (link).
      </p>
    </section>
  </body>;
};
