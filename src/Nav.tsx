import classes from "./App.module.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  const navStyle = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <nav className={classes.NavBar}>
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>

      <ul className={classes.NavLink}>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
