import { NavLink, Outlet } from "react-router-dom";


export default function Nav() {
  return (
    <nav>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/componente1"}>Componente1</NavLink></li>
            <li><NavLink to={"/componente2"}>Componente2</NavLink></li>
            <li><NavLink to={"/SubRutas"}>SubRutas</NavLink></li>
            <li><NavLink to={"/Persona"}>Persona</NavLink></li>
           
        </ul>
        
    </nav>
  )
}
