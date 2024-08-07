import {
    BrowserRouter,
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

const RouterAuth=(props)=>{
  const { autenticado } = props

  return(
    <>
      <BrowserRouter>

        <Navbar />

        {/* Definimos todas las rutas que soportará este router
            Cada ruta apunta a una view/pagina, y dentro de ella
            están los componentes que las conforman
         */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/productos" element={<Productos />} />
          {/* Si el usuario no está autenticado, se lo envía (navigate)
              a la página de login */}
          <Route path="/user-info"
           element={autenticado?
            <UserInfo />
             :
            <Navigate to="/login" />
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default RouterAuth;

