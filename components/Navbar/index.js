import { useRouter } from "next/router";
import { Link } from "react-scroll";

const Navbar = ({ text }) => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
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
          <li>
            <select defaultValue={locale} onChange={changeLanguage}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
