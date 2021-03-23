import React from "react";
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";
import { Link } from "react-scroll";

const About = ({ text }) => {
  return (
    <div className="about" id="about">
      <FadeInWhenVisible divClass="about__center" fadeFrom="top">
        <div className="about__center__text">
          <h1>{text.aboutTitle}</h1>
          <div className="about__center__text--underline"></div>
          <div
            className="about__center__text__content"
            dangerouslySetInnerHTML={{ __html: text.aboutDescription }}
          />
          <div
            className="about__center__text__content"
            dangerouslySetInnerHTML={{ __html: text.aboutSalute }}
          />
        </div>
      </FadeInWhenVisible>
      <footer className="about__center__footer">
        <div className="about__center__footer__links">
          <a href="https://github.com/ether200" target="_blank">
            <FaGithubSquare className="about__center__footer__links__icon" />
          </a>
          <Link to="hero" smooth={true} duration={500}>
            <FaAngleDoubleUp className="about__center__footer__links__icon about__center__footer__links__icon--color" />
          </Link>
          <a
            href="https://www.linkedin.com/in/ivan-muntian-1ba593208"
            target="_blank"
          >
            <FaLinkedin className="about__center__footer__links__icon" />
          </a>
        </div>
        <div className="about__center__footer__underline"></div>
        <p>&copy; 2021, Iván Muntian.</p>
      </footer>
    </div>
  );
};

export default About;
