import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => (
    <header className="page-header">
        <div className="container" style={{ display: 'flex' }}>
            <div className="logo" src="./img/Blogo-transparent.png">
            <div class="theme-switch-wrapper">
                <span>gender mode</span>
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                </label>
               
            <div className="navigation">
                <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
                    <Link style={{ display: "block", margin: "1rem 0" }}
                to="/samovysetreni">Jak na to(.)(.)</Link> <br/> {' '}
                    <Link style={{ display: "block", margin: "1rem 0" }}
                to="/kalendar">Kalendář</Link> <br/> {' '}
                    <Link style={{ display: "block", margin: "1rem 0" }}
                to="/codelatkdyz">Co dělat, když...</Link>{' '}
            </nav>
            </div>
             </div>
            </div>
            <Outlet />
            
        </div>
    </header>
);

