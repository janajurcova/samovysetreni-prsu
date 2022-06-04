import React from 'react';
import { createRoot } from 'react-dom/client';
import { Questions } from './pages/Questions';
import { Manual } from './pages/Manual';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {}


  createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/samovysetreni" element={<Manual />} />
        <Route path="/kalendar" element={<Calendar />} />
      <Route path="/codelatkdyz" element={<Questions />} />
    </Routes>
    </BrowserRouter>
)


