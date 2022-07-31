function NavLink(props) {
  return (
    <div>
      <a href={props.link}>{props.title}</a>
    </div>
  );
}

export default NavLink;
