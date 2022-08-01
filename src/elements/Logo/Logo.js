import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <div>
      <Link href={props.link}>
        <img src="../../assets/IMG_1792.jpeg" alt="logo"></img>
      </Link>
    </div>
  );
}

export default Logo;
