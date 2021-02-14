import { useRouter } from "next/router";

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
            <a href="#projects">{text.nav1}</a>
          </li>
          <li>
            <a href="#about">{text.nav2}</a>
          </li>
          <li>
            <select defaultValue={locale} onChange={changeLanguage}>
              <option value="es">Es</option>
              <option value="en">En</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
