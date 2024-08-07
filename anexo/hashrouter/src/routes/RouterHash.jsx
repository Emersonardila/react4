import {
    HashRouter,
    Routes,
    Route,
    Navigate,
    NavLink,
} from "react-router-dom";

// Aquí importamos todas las vistas/páginas que utilizará el router
import Home from "../views/Home"
import SignUp from "../views/SignUp"
import Productos from "../views/Productos"
import UserInfo from "../views/UserInfo"
import Login from "../views/Login"

// Aquí importamos algun componente que utilice le router
// como el Navbar, carteles de alerta, etc
import Navbar from "../components/Navbar/Navbar"

const RouterHash=()=>{
  return(
    <>
      <HashRouter>

        <Navbar />

        {/* Definimos todas las rutas que soportará este router
            Cada ruta apunta a una view/pagina, y dentro de ella
            están los componentes que las conforman
         */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/user-info" element={<UserInfo />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </HashRouter>
      
    </>
  )
}

export default RouterHash;

