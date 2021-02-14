import React from "react";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";
import { IoIosArrowUp, IoMdArrowUp } from "react-icons/io";

const About = ({ text }) => {
  return (
    <div className="about" id="about">
      <div className="about__center">
        <div className="about__center__column">
          <div className="about__center__column__text">
            <h1>{text.aboutTitle}</h1>
            <div className="about__center__column__text--underline"></div>
            <div
              className="about__center__column__text__content"
              dangerouslySetInnerHTML={{ __html: text.aboutDescription }}
            />
            <button className="about__center__column__text__btn">Resume</button>
            <div
              className="about__center__column__text__content"
              dangerouslySetInnerHTML={{ __html: text.aboutSalute }}
            />
            {/* <div className="about__center__column__text__links">
              <a href="#">
                <FaGithubSquare className="about__center__column__text__links__icon" />
              </a>
              <a href="#">
                <FaLinkedin className="about__center__column__text__links__icon" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="about__center__column">
          <div className="about__center__column__photo">
            <Image
              src="/me.jpg"
              alt="hello there"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <footer className="about__center__footer">
        {/* <div className="about__center__footer__arrow">
          <a href="">
            <IoMdArrowUp className="about__center__footer__arrow__icon" />
          </a>
        </div> */}

        <div className="about__center__footer__links">
          <a href="#">
            <FaGithubSquare className="about__center__footer__links__icon" />
          </a>
          <a href="#hero">
            <FaAngleDoubleUp className="about__center__footer__links__icon about__center__footer__links__icon--color" />
          </a>
          <a href="#">
            <FaLinkedin className="about__center__footer__links__icon" />
          </a>
        </div>
        <div className="about__center__footer__underline"></div>
        <p>&copy; 2021, Ivan Muntian.</p>
      </footer>
    </div>
  );
};

export default About;
