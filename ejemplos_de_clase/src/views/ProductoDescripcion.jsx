import { useParams, useNavigate } from "react-router-dom";

import Cartel from "../components/Cartel/Cartel";

const ProductoDescripcion=()=>{
    const { nombre = "no-encontrado" } = useParams();

    // navigate nos permitirá navegar en nuestra página,
    // desplazarlos de una URL a otra introduciendo paramétros
    const navigate = useNavigate();

    return(
        <div>
            <h1>
              <Cartel content= {`Producto ${nombre}`}/>
            </h1>
            <button 
              onClick={() => navigate(`/productos/${nombre}/comprar`)}
            >
                Comprar
            </button>
        </div>
    )
}

export default ProductoDescripcion;