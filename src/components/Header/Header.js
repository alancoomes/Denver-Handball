import NavLink from "../../elements/NavLink/NavLink";
import Link from "react-router-dom";

function Header(props) {
  return (
    <div>
      <NavLink title="Home"></NavLink>
      <NavLink title="What Is Handball?" link=""></NavLink>
      <NavLink title="About Us" link=""></NavLink>
      <NavLink title="Media" link=""></NavLink>
      <NavLink title="Contact" link=""></NavLink>
      <NavLink title="Sponsors" link=""></NavLink>
    </div>
  );
}

export default Header;
