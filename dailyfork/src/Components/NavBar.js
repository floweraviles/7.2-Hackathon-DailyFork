import { NavLink } from "react-router-dom";
import Logo from "../Assets/fork.png";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt="daily-fork-logo" />
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
