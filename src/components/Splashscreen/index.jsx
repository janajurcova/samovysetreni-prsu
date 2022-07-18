import React, { useEffect, useState, Component } from 'react';
import './style.css';
import SplashImg from './cover_withText.png';
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById("splashBg").classList.add("active");
})
export const Splashscreen = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById("splashBg").classList.add("display-none");
        }, 2000);
        return () => console.log('Delay done');
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