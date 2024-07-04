import FadeIn from "../FadeIn";

const Hero = ({ text }) => {
  return (
    <header className="hero" id="hero">
      <div className="hero__center">
        <FadeIn divClass="hero__center__content" fadeFrom="bottom">
          <h1>
            {text.heroTitle}
            <span>Iván.</span>
          </h1>
          <p>{text.heroDescription}</p>
        </FadeIn>
      </div>
    </header>
  );
};

export default Hero;
