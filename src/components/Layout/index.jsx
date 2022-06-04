import React from 'react';
import { Header } from '../Header';
import './style.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="layout-cover">
          <Outlet />
        </main>
      </div>
    </>
  );
};
