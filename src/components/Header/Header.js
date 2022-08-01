import NavLink from "../../elements/NavLink/NavLink";

function Header(props) {
  return (
    <header>
      <NavLink title="Home"></NavLink>
      <NavLink title="What Is Handball?" link=""></NavLink>
      <NavLink title="About Us" link=""></NavLink>
      <NavLink title="Media" link=""></NavLink>
      <NavLink title="Contact" link=""></NavLink>
      <NavLink title="Sponsors" link=""></NavLink>
    </header>
  );
}

export default Header;
