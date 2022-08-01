import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <div>
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
}

export default NavLink;
