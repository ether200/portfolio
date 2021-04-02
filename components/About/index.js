import React from "react";
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";
import { Link } from "react-scroll";

const About = ({ text }) => {
  return (
    <div className="about" id="about">
      <div className="custom-shape-divider-top-1617337157">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
