import en from "../locales/en";
import es from "../locales/es";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = ({ locale }) => {
  const localeObj = locale === "es" ? es : en;

  return (
    <>
      <Head>
        <title>Iván Muntian - Front end developer.</title>
        <meta
          name="description"
          content="Ivan's portfolio to showcase his skills as front end developer. "
        />
      </Head>
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
