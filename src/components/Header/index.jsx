import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => (
    <header className="page-header">
        <div className="container">
            <div className="logo" src="./img/Blogo-transparent.png">
            <div class="theme-switch-wrapper">
                <span>gender mode</span>
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                </label>
                </div>
            </div>
            <div className="navigation">
            <nav>
                <Link to="/samovysetreni">Jak na to(.)(.)</Link> |{' '}
                <Link to="/kalendar">Kalendář</Link>|{' '}
                <Link to="/codelatkdyz">Co dělat, když...</Link>|{' '}
            </nav>
            </div>
            <Outlet />
        </div>
    </header>
);

