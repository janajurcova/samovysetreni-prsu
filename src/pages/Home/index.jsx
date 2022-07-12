import React from 'react';
import './style.css';
import '../../style.css';
import { Link } from 'react-router-dom';
import gender from './../../img/gender-icon.png';
import icon1 from './img/Icons-flower.jpg';
import icon2 from './img/Icons-cancer.jpg';
import icon3 from './img/Icons-B.jpg';
import icon4 from './img/Icon-Men-flower.jpg';
import icon5 from './img/Icon-Men-cancer.jpg';
import icon6 from './img/Icon-Men-B.jpg';
import bellis from './img/Bellis-logo-transparent.png';
import bellisMen from './img/Bellis-logo-men.png';
import { useContext } from 'react';
import { ThemeContext } from '../../index';
import { InstallButton } from '../../components/InstallButton';
import { Footer } from '../../components/Footer';
import { Splashscreen } from '../../components/Splashscreen';


export const Switcher = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <img className="gender" src={gender} />
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={theme === 'men'}
          onChange={() => {
            setTheme(theme === 'women' ? 'men' : 'women');
          }}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};


export const Home = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="home-page">
     <Splashscreen />
      <header className="home-header">
        <Switcher setTheme={setTheme} />
        <div className="home-header__motto">
          <h1 className="home-header__title">Samovyšetření prsu</h1>
          <h4 className="home-header__subtitle">"TOUCH ME IF YOU CAN"</h4>
        </div>
        <div className="installButton">
          <InstallButton />
        </div>
      </header>
      <main>
        <div className="homepage-main">
          <div className="homepage-main__body">
            <div className="homepage-main__manual">
              <a>Jak na to (.)(.)</a>
              <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to="/samovysetreni"
              >
                <img
                  className="icon1"
                  src={theme === 'women' ? icon1 : icon4}
                />
              </Link>{' '}
            </div>
            <div className="homepage-main__calendar">
              <a>Kalendář</a>
              <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to="/kalendar"
              >
                <img
                  className="icon2"
                  src={theme === 'women' ? icon2 : icon5}
                />
              </Link>{' '}
            </div>
            <div className="homepage-main__questions">
              <a>Co dělat, když...</a>
              <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to="/codelatkdyz"
              >
                <img
                  className="icon3"
                  src={theme === 'women' ? icon3 : icon6}
                />
              </Link>{' '}
            </div>
          </div>

          <div className="bellis">
            <div>
              <a
                className="bellis-facebook"
                href="https://www.facebook.com/mybellisky?locale=cs_CZ"
              >
                <i className="lab la-facebook"></i>
              </a>
            </div>
            <div>
              <img
                className="Bellis"
                src={theme === 'women' ? bellis : bellisMen}
              />
            </div>
            <div>
            <a className="bellis-info">
              <Link
                to="/info"
              >
                <i className="las la-info-circle" style={{ textDecoration: 'none', color: 'white' }}></i>
              </Link>{' '}
              </a>
            </div>
          </div>
          <div className="main__installButton">
            <InstallButton />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
