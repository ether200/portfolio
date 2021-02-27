import en from "../locales/en";
import es from "../locales/es";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = ({ locale }) => {
  const localeObj = locale === "es" ? es : en;

  return (
    <>
      <Navbar text={localeObj} />
      <Hero text={localeObj} />
      <Projects text={localeObj} />
      <About text={localeObj} />
    </>
  );
};

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default Home;
