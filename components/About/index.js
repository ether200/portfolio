import React from "react";
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";
import { Link } from "react-scroll";
import Accordion from "../Accordion";

const About = ({ text }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="about" id="about">
      <div className="about__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="about__center">
        <FadeInWhenVisible divClass="about__center__text" fadeFrom="top">
          <h1>FAQ</h1>
          <div className="about__center__text--underline"></div>
          <div className="about__center__text__accordionWrapper">
            {text.faq.map((q, i) => (
              <Accordion
                key={i}
                index={i}
                selected={selected}
                setSelected={setSelected}
                question={q.question}
                content={q.content}
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
      <footer className="about__center__footer">
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
        <div className="about__center__footer__underline"></div>
        <p>&copy; 2021, Iván Muntian.</p>
      </footer>
    </div>
  );
};

export default About;
