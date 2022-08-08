import Logo from "../../elements/Logo/Logo";
import NavLink from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink className="header-navlink" to="/">
        <div>Home</div>
      </NavLink>
      <NavLink className="header-navlink" to="/handball">
        <div>what Is Handball?</div>
      </NavLink>
      <NavLink className="header-navlink" to="/about">
        <div>About Us</div>
      </NavLink>
      <Logo to="/"></Logo>
      <NavLink className="header-navlink" to="/media">
        <div>Media</div>
      </NavLink>
      <NavLink className="header-navlink" to="/contact">
        <div>Contact</div>
      </NavLink>
      <NavLink className="header-navlink" to="/sponsors">
        <div>Sponsors</div>
      </NavLink>
    </header>
  );
}

export default Header;
