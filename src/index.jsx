import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Questions } from './pages/Questions';
import { Manual } from './pages/Manual';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from "react";



export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("women");
  
  return (
    <div className="app" data-theme={theme}>
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setTheme={setTheme} />} />
          <Route path="/" element={<Layout />}>
            <Route path="samovysetreni" element={<Manual />} />
            <Route path="kalendar" element={<Calendar />} />
            <Route path="codelatkdyz" element={<Questions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);