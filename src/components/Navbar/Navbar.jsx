import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__element">
        <Link
          to={"attractions"}
          smooth={true}
          duration={350}
          className="navbar__link"
        >
          Достопримечательности
        </Link>
      </li>
      <li className="navbar__element">
        <Link
          to={"yakutsk"}
          smooth={true}
          duration={350}
          className="navbar__link"
        >
          Якутск
        </Link>
      </li>
      <li className="navbar__element">
        <Link
          to={"weather"}
          smooth={true}
          duration={350}
          className="navbar__link"
        >
          Погода
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
