import { Routes, Route, BrowserRouter as Router, Navigate} from "react-router-dom"
import Home from "../components/Home"
import Componente1 from "../components/Componente1"
import Componente2 from "../components/Componente2"
import Nav from "../components/Nav"
import Error404 from "../components/Error404"
import SubRutas from "../components/SubRutas"
import InicioSubRuta from "../components/InicioSubRuta"
import SubRuta1 from "../components/SubRuta1"
import SubRuta2 from "../components/SubRuta2"
import Persona from "../components/Persona"

export default function RouterPrincipal() {
  return (
    <Router>
        <Nav/>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/componente1"element={<Componente1/>}/>
            <Route path="/componente2"element={<Componente2/>}/>
            
           <Route path="/SubRutas"element={<SubRutas/>}/>
            <Route index element={<SubRutas/>}/>
            <Route path="InicioSubRuta"element={<InicioSubRuta/>}/>
            <Route path="SubRuta1"element={<SubRuta1/>}/>
            <Route path="SubRuta2"element={<SubRuta2/>}/>
            <Route/>
            <Route path="/persona/:nombre/:apellido" element={<Persona />} />
            <Route path="/persona/:nombre" element={<Persona />} />
            <Route path="/persona" element={<Persona />} />
            <Route path="/navegar" element={<Navigate to="/persona/TuNombre/TuApellido" />} />

            <Route path="*"element={<Error404/>}/>
        </Routes>
    </Router>
  )
}
