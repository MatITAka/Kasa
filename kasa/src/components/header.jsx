import logoImg from "../assets/images/LogoHeader.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <img src={logoImg} alt="aa" />
      <ul>
        <li>          
          <NavLink to="/">Accueil</NavLink>
        </li>

        <li className="mediaQ_link">
          <NavLink to="/about">A propos </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
