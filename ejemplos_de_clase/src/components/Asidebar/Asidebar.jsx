import styles from "./Asidebar.module.css";
import { useParams, NavLink, Outlet } from "react-router-dom";


const Asidebar = () => {
  const { nombre = "no-encontrado" } = useParams();

  return (
    <>
      <aside className={styles.contenedor}>
        <ul>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to={`/productos/${nombre}`}>Información</NavLink>
          </li>
          <li>
            <NavLink to={`/productos/${nombre}/comprar`}>Comprar</NavLink>
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  );
};

export default Asidebar;
