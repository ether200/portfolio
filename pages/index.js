import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import About from "../components/About";
import locales from "../locales";

const Home = ({ locale }) => {
  return (
    <>
      <Head>
        <title>Iván Muntian - Front end developer</title>
        <meta
          name="description"
          content="Ivan's portfolio to showcase his skills as front end developer. "
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar text={locales[locale]} />
      <Hero text={locales[locale]} />
      {/* <Projects text={locales[locale]} /> */}
      <Timeline text={locales[locale].timeline} />
      <About text={locales[locale]} />
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
