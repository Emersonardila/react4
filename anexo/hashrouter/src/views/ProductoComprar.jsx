import { useParams, useNavigate } from "react-router-dom";

import Cartel from "../components/Cartel/Cartel";

const ProductoComprar=()=>{
    const { nombre = "no-encontrado" } = useParams();

    return(
        <div>
            <h1>
              <Cartel content= {`Producto ${nombre} Precio $123`}/>
            </h1>
        </div>
    )
}

export default ProductoComprar;