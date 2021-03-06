import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";
import { Link } from "react-scroll";

const Hero = ({ text }) => {
  return (
    <header className="hero" id="hero">
      <div className="hero__center">
        <FadeInWhenVisible divClass="hero__center__content" fadeFrom="bottom">
          <h1>
            {text.heroTitle}
            <span>Iván.</span>
          </h1>
          <h4>{text.heroDescription}</h4>
          <Link to="projects" smooth={true} duration={500} className="btn">
            {text.heroBtn}
          </Link>
        </FadeInWhenVisible>
      </div>
      <div className="hero__wave">
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
    </header>
  );
};

export default Hero;
