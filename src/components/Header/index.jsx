import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => (
  <header className="page-header">
    <div className="logo" src="./img/Blogo-transparent.png">
      {/* <div className="theme-switch-wrapper">
            <span>gender mode</span>
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div> */}
    </div>

    <nav className="navigation">
      <Link style={{ display: 'block', margin: '1rem 0' }} to="/samovysetreni">
        Jak na to(.)(.)
      </Link>{' '}
      <br />{' '}
      <Link style={{ display: 'block', margin: '1rem 0' }} to="/kalendar">
        Kalendář
      </Link>{' '}
      <br />{' '}
      <Link style={{ display: 'block', margin: '1rem 0' }} to="/codelatkdyz">
        Co dělat, když...
      </Link>{' '}
    </nav>
    <div className="downloadApp">
      Stáhnout jako
      <button className="nav__button">App</button>
    </div>
  </header>
);
