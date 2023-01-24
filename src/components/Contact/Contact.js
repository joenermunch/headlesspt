import React, { useState } from "react";
import "./Contact.scss";
import Confetti from "react-dom-confetti";

function Contact() {
  const [isExploding, setIsExploding] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: "63",
    dragFriction: 0.12,
    duration: 3000,
    stagger: "8",
    width: "8px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const source = {
    position: "absolute",
    right: "50%",
    left: "50%",
    bottom: 50,
  };

  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: 1600,
    floorWidth: 1600,
  };

  return (
    <div className="confetti-container">
      <Confetti active={isExploding} config={config} />
    </div>
  );
}

export default Contact;
