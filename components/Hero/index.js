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
    </header>
  );
};

export default Hero;
