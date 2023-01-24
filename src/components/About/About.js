import React from "react";
import "./About.scss";
import image from "./me.jpg"; // relative path to image

export default function About() {
  return (
    <div className="about-container main-margin" id="about">
      <div className="inner-block about-inner">
        <div className="text-container animate__animated animate__slideInUp">
          <h2>
            Hello! <span className="wave">👋</span>
          </h2>
          <p>
            I'm a developer specializing in creating custom solutions for
            WordPress. With over 5 years of experience, I have developed a deep
            understanding of the platform's capabilities and core
            functionalities. My goal is to help businesses and individuals bring
            their online presence to the next level through custom-coded
            plugins, themes and integrations.
          </p>

          <p>
            I have a keen eye for detail and a passion for page speed
            optimizations and Gutenberg blocks. I understand that a fast and
            responsive website is essential for a great user experience.
          </p>

          <p>
            In my free time, I love exploring new technologies and design
            trends, constantly looking for new challenges and opportunities to
            work with clients and bring their vision to life.
          </p>
        </div>
        <div className="image-container animate__animated animate__slideInUp animate__delay-1s">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
