import { useRouter } from "next/router";
import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = ({ text }) => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = () => {
    const newLocale = locale !== "es" ? "es" : "en";
    router.push("/", "/", { locale: newLocale });
  };

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <ul>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              {text.nav1}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              {text.nav2}
            </Link>
          </li>
          <li onClick={changeLanguage}>
            <Image
              src={locale !== "es" ? "/spain.png" : "/united-kingdom.png"}
              alt="Switch language"
              width={22}
              height={22}
              layout="fixed"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
