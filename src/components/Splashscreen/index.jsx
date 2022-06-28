import React, {useEffect, useState} from 'react';
import './style.css';
import SplashImg from './intro_1.png'
  
document.addEventListener('DOMContentLoaded', (e)=>{
document.getElementById("splashBg").classList.add("active");
})
export const Splashscreen = () => {    
    useEffect(() => {
        const timer = setTimeout(() => {
          document.getElementById("splashBg").classList.add("display-none");
        }, 2000);
        return () =>  console.log('Delay done');
      }, []);
  return (
    <>
      <div id="splashBg" className="splashBg">
       <div id="splashImgWrapper" className="fade-in"> 
       <img className="splashImg" src={SplashImg} />
       </div>
      </div>
    </>
  );
};
