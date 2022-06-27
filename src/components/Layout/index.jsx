import React from 'react';
import { Header } from '../Header';
import './style.css';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../index';


export const Layout = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="layout">
        <Header />
        <main className="layout-cover">
          <Outlet />
          <Footer />
        </main>   
      </div>  
    </>
  );
};
