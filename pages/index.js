import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const text = locale === "es" ? es : en;
  return (
    <>
      <Navbar text={text} />
      <Hero text={text} />
      <Projects text={text} />
      <About text={text} />
    </>
  );
};

export default Home;
