import React from 'react';
import './style.css';

export const Questions = () => {
    //     const accordion = {
    //         let acc = document.getElementsByClassName("accordion");
    //         let i;

    //         for(i = 0; i<acc.length; i++) {
    //             acc[i].addEventListener("click", function () {
    //                 /* Toggle between adding and removing the "active" class,
    //                 to highlight the button that controls the panel */
    //                 this.classList.toggle("active");

    //                 /* Toggle between hiding and showing the active panel */
    //                 let panel = this.nextElementSibling;
    //                 if (panel.style.display === "block") {
    //                     panel.style.display = "none";
    //                 } else {
    //                     panel.style.display = "block";
    //                 }
    //             });
    // }
    //     }
    return (
        <main style={{ padding: '1rem' }}>
            <h1>Co dělat, když...</h1>
            <div className="questions">

                <button className="accordion">1 - Něco se ti nezdá?</button>
                <div className="panel">
                    <p>Navštiv svého gynekologa nebo praktika a objednej se na screening…Dej si pozor, aby šlo o akreditované centrum.
                        - seznam akreditovaných mamocenter
                        https://www.mamo.cz/centra/</p>
                </div>

                <button className="accordion">2 - Jsi zmatená z výsledků a nevíš co dál?</button>
                <div className="panel">
                    <p>Využij “second opinion”. Máš nárok na názor dalšího odborníka.
                        - seznam kompletních onko center - česká onko společnost
                        https://www.linkos.cz/lekar-a-multidisciplinarni-tym/narodni-onkologicka-sit/prehled-komplexnich-onkologickych-center-cr/</p>
                </div>

                <button className="accordion">3 - Ověřuj si informace</button>
                <div className="panel">
                    <p> - nzip
                        https://www.nzip.cz/kategorie/177-rakovina-prsu</p>
                </div>

                <button class="accordion">4 - Špatné výsledky? To je nám líto.</button>
                <div class="panel">
                    <p>Začni od Amélie a socioekonomickou poradnou.
                        - socioekonom Amelie
                        https://www.amelie-zs.cz/</p>
                </div>

                <button class="accordion">5 - Nestačí to? Koukni co pro tebe může udělat Dobrý anděl.</button>
                <div class="panel">
                    <p> - dobrý anděl příspěvky organizace
                        https://www.dobryandel.cz/rakovina-nadace-dobry-andel-pomaha/</p>
                </div>

                <button class="accordion">6 - Zvládnout ekonomickou situaci ti pomůžou i různé dávky.</button>
                <div class="panel">
                    <p>- ministerstvo práce a sociálních věcí
                        https://www.mpsv.cz/</p>
                </div>

                <button class="accordion">7 - Nejsi v tom sama. Nech si pomoct a mluv o tom.</button>
                <div class="panel">
                    <p> - pacientské organizace - bellis, aliance žen s rakovinou prsu, avon linka,
                        https://www.bellisky.cz/ https://www.breastcancer.cz/
                        https://www.zdravaprsa.cz/avon-linka-proti-rakovine-prsu-slavi-10-let/
                        https://www.facebook.com/AvonLinkaZaZdravaPrsa
                        Avon linka poskytuje na čísle 800 546 546 zdarma od pondělí do pátku (10–18 hodin). Je určena všem, kteří potřebují poradit ohledně onemocnění a prevence rakoviny prsu. Poradenství je anonymní a poskytují jej ženy, které zvládly náročnou léčbu této nemoci.</p>
                </div>

                <button class="accordion">8 - Pomohl by ti onkopsycholog na telefonu?</button>
                <div class="panel">
                    <p>Bývá každou středu na Avon lince.
                        - psychologická poradna Avon linka
                        Linka (na čísle 800 546 546) nabízí i psychologické poradenství, pro které je vyhrazena středa od 16 do 18 hodin. Je zaměřeno na pomoc v náročné životní situaci spojené s diagnózou onkologického onemocnění, tj. při zvládání stresu a emocí a řešení akutních psychických či vztahových problémů.
                        Dotazy je možné zasílat i e-mailem na zazdravaprsa@breastcancer.cz</p>
                </div>

                <button class="accordion">9 - Onkopsychologů je málo, ale jsou.</button>
                <div class="panel">
                    <p> - Onkopsycholog a kde ho najít
                        https://www.linkos.cz/pacient-a-rodina/pomoc-v-nemoci/psychologicka-pomoc/mapa-psychoonkologicke-pece/#search=1</p>
                </div>

                <button class="accordion">10 - Přihlaš se o svého průvodce. </button>
                <div class="panel">
                    <p>Autorkami jsou mladé ženy, které zažily to, co ty.
                        - Nejsi na to sama - kniha
                        https://www.bellisky.cz/projekty-a-akce/kniha-nejsi-na-to-sama-pruvodce-rakovinou-prsu/


                        Nezapomínej si říkat o pomoc. Nejsi v tom sama</p>
                </div>
            </div>
        </main>
    );
};

