import Logo from "../../elements/Logo/Logo";
import NavLink from "../../elements/NavLink/NavLink";

function Header() {
  return (
    <header>
      <NavLink title="Home" link="/"></NavLink>
      <NavLink title="What Is Handball?" link="/handball"></NavLink>
      <NavLink title="About Us" link="/about"></NavLink>
      <Logo link="/"></Logo>
      <NavLink title="Media" link="/media"></NavLink>
      <NavLink title="Contact" link="/contact"></NavLink>
      <NavLink title="Sponsors" link="/sponsors"></NavLink>
    </header>
  );
}

export default Header;
