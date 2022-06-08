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
    const [theme, setTheme] = useState("men");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "women" ? "men" : "women"));
    };
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
            <Switcher onChange={toggleTheme} checked={theme === "men"} />
          </div>
      </ThemeContext.Provider>
    );
  }


createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="samovysetreni" element={<Manual />} />
        <Route path="kalendar" element={<Calendar />} />
        <Route path="codelatkdyz" element={<Questions />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
