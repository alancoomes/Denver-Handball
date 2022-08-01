import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <>
      <Link href={props.link}>
        <img src="../../assets/IMG_1792.jpeg" alt="logo"></img>
      </Link>
    </>
  );
}

export default Logo;
