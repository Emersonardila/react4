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
import UserInfo from "../views/UserInfo"
import Login from "../views/Login"

import Error404 from "../views/Error404"

import ProductosBuscar from "../views/ProductosBuscar"
import ProductoDescripcion from "../views/ProductoDescripcion"
import ProductoComprar from "../views/ProductoComprar"

// Aquí importamos algun componente que utilice le router
// como el Navbar, carteles de alerta, etc
import Navbar from "../components/Navbar/Navbar"
import Asidebar from "../components/Asidebar/Asidebar"


const RouterAnidados=(props)=>{
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
          <Route path="/user-info" element={<UserInfo />}></Route>
          <Route path="/login" element={<Login />} />

          <Route path="/productos">
            <Route index element={<ProductosBuscar />} />
            <Route path=":nombre" element={<ProductoDescripcion />} />
            <Route path=":nombre/comprar" element={<ProductoComprar />} />
          </Route>
          

          <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default RouterAnidados;

