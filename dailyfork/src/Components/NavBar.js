import { NavLink } from "react-router-dom";
import Logo from "../Assets/fork.png";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={Logo} alt="daily-fork-logo" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
