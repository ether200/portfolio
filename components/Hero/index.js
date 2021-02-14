import React from "react";

const Hero = ({ text }) => {
  return (
    <header className="hero" id="hero">
      <div className="hero__center">
        <div className="hero__center__content">
          <h1>{text.heroTitle}</h1>
          <h4>{text.heroDescription}</h4>
          <button className="btn">{text.heroBtn}</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
