import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero-container inner-block">
      <div className="hero-inner-container main-margin">
        <div className="subtitle-container animate__animated animate__slideInLeft animate__faster">
          <span>Welcome! My name is</span>
        </div>
        <h1 className="animate__animated animate__slideInLeft animate__faster">
          Joener Münch.
          <br />
          <strong>WordPress Developer.</strong>
        </h1>

        {/* <div className="arrow-container animate__animated animate__shakeY animate__infinite animate__slower">
          <a href="#about">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                stroke="#03c988"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
}
