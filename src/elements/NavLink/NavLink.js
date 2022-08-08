import { NavLink } from "react-router-dom";

function NavigationLink(props) {
  return (
    <div>
      <NavLink className={props.name} to={props.link}>
        {props.title}
      </NavLink>
    </div>
  );
}

export default NavigationLink;
