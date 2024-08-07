import { Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "../components/Home"
import Contact from "../components/Contact"
import Error404 from "../components/Error404"

export default function RouterPrincipal() {
  return (
    <Router>
        <Routes>
           < Route path="/"element={<Home/>}/>
           < Route path="/contact"element={<Contact/>}/>
           <Route path="*" element={<Error404/>}/>
        </Routes>
    </Router>
  )
}
