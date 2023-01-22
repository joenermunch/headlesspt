import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero-container inner-block">
      <div className="hero-inner-container main-margin">
        <div className="subtitle-container">
          <span>Hello! I'm</span>
        </div>
        <h1>
          Joener Münch
          <br />
          <strong>WordPress Developer.</strong>
        </h1>

        <a className="main-cta">Learn More</a>
      </div>
    </div>
  );
}
