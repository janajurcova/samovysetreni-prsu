import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    });
  }, []);

  const handleClick = (event) => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted installation');
        setDeferredPrompt(null);
      } else {
        console.log('User rejected installation');
      }
    });
  };

  return (
    <>
      <div className="downloadApp">
        Stáhnout jako
        <button
          className="nav__button"
          style={{ display: deferredPrompt ? 'inline' : 'none' }}
          onClick={handleClick}
        >
          App
        </button>
      </div>
    </>
  );
};
