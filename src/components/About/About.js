import React from "react";
import "./About.scss";
import image from "./me.jpg"; // relative path to image

export default function About() {
  return (
    <div class="about-container main-margin">
      <div class="inner-block about-inner">
        <div class="text-container">
          <h2>Hello! 👋</h2>
          <p>
            I'm a WordPress developer specializing in creating custom solutions
            for even the most complex projects. With over 5 years of experience,
            I have developed a deep understanding of the platform's
            capabilities. My goal is to help businesses and individuals bring
            their online presence to the next level through custom-coded
            plugins, themes and integrations.
          </p>

          <p>
            I have a keen eye for detail and a passion for page speed
            optimizations and Gutenberg blocks integrations. I understand that a
            fast and responsive website is essential for a great user
            experience.
          </p>

          <p>
            In my free time, I love exploring new technologies and design
            trends, constantly looking for new challenges and opportunities to
            work with clients and bring their vision to life.
          </p>
        </div>
        <div class="image-container">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
