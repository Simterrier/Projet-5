import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      {}
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="Kasa" />
        </NavLink>

        <nav className="header__nav">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
        </nav>
      </div>
    </header>
  );
}