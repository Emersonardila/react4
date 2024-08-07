import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={styles.contenedor}>
      <ul>
        <li>
          <NavLink to="/index">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign-up</NavLink>
        </li>
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/user-info">User Info</NavLink>
        </li>
        <li>
          <NavLink to="/login">LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
