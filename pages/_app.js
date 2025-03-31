import "@fontsource/merriweather";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Analytics />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
