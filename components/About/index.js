import React from "react";
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import FadeIn from "../FadeIn";

const About = ({ text }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="about" id="about">
      <div className="about__center">
        <FadeIn divClass="about__center__text" fadeFrom="top">
          <h2>{text.about.title}</h2>
          <div className="about__center__text__accordionWrapper">
          <div className="projects__center__project__info__text" dangerouslySetInnerHTML={{ __html: text.about.description }} />
          </div>
        </FadeIn>
      </div>
      <footer className="about__center__footer">
      <div className="about__center__footer__underline"></div>
        <div className="about__center__footer__links">
          <a href="https://github.com/ether200" target="_blank" rel="noreferer">
            <FaGithubSquare className="about__center__footer__links__icon" />
          </a>
          <Link to="hero" smooth={true} duration={500}>
            <FaAngleDoubleUp className="about__center__footer__links__icon about__center__footer__links__icon--color" />
          </Link>
          <a
            href="https://www.linkedin.com/in/ivan-muntian-1ba593208"
            target="_blank"
            rel="noreferer"
          >
            <FaLinkedin className="about__center__footer__links__icon" />
          </a>
        </div>
        <p>&copy; {currentYear}, Iván Muntian.</p>
      </footer>
    </div>
  );
};

export default About;
