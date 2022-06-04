import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/Blogo-transparent.png';

export const Header = () => (
  <header className="page-header">
  <div>
    <Link
      style={{ display: 'block', margin: '1rem 0' }}
      to="/"
    >
      <img className="logo" src={logo} />
    </Link>{' '}
    </div>

    <nav className="navigation">
      <Link className="navigation-link" to="/samovysetreni">
        Jak na to(.)(.)
      </Link>{' '}
      <br />{' '}
      <Link className="navigation-link" to="/kalendar">
        Kalendář
      </Link>{' '}
      <br />{' '}
      <Link className="navigation-link" to="/codelatkdyz">
        Co dělat, když...
      </Link>{' '}
    </nav>
    <div className="downloadApp">
      Stáhnout jako
      <button className="nav__button">App</button>
    </div>
  </header>
);
