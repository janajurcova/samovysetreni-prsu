import React from 'react';
import './style.css';
import { InstallButton } from '../InstallButton';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <div className="installButton">
          <InstallButton />
        </div> */}
        <div className="bellis__footer">
          <small className="copyright">
            <p>Copyright &copy; </p>
            <p>
              Bellis – mladé ženy s rakovinou prsu. Vyrobeno při Digitální
              akademii Czechitas 2022
            </p>
          </small>
        </div>
      </div>
    </>
  );
};
