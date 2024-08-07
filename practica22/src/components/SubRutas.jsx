import { NavLink, Outlet } from "react-router-dom";


export default function SubRutas() {
  return (
    <nav>
    <ul>
        <li><NavLink to={"/SubRutas"}>SubRutas</NavLink></li>
        <li><NavLink to={"/InicioSubRuta"}>InicioSubRuta</NavLink></li>
        <li><NavLink to={"/SubRuta1"}>SubRuta1</NavLink></li>
        <li><NavLink to={"/SubRuta2"}>SubRuta2</NavLink></li>
       
    </ul>
    <Outlet/>
    </nav>
  )
}
