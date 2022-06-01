import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Questions } from './pages/Questions';
import { Manual } from './pages/Manual';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => (
  <div>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/samovysetreni">Jak na to(.)(.)</Link> |{' '}
      <Link to="/kalendar">Kalendář</Link>
      <Link to="/codelatkdyz">Co dělat, když...</Link>
    </nav>
    <Outlet />
  </div>
)


  createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/samovysetreni" element={<Manual />} />
        <Route path="/kalendar" element={<Calendar />} />
      <Route path="/codelatkdyz" element={<Questions />} />
    </Routes>
    </BrowserRouter>
)


