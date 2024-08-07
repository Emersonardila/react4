import { useNavigate } from "react-router-dom";

const ProductosBuscar=()=>{
    // navigate nos permitirá navegar en nuestra página,
    // desplazarlos de una URL a otra introduciendo paramétros
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      const nombre = e.currentTarget.nombre.value;
  
      navigate(`/productos/${nombre}`);
    }

    return(
        <div>
            <h1>"Productos 🎁"</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='nombre' placeholder='Ingrese producto a buscar...' />
                <input type='submit' name='enviar' value={"Buscar"} />
            </form>
        </div>
    )
}

export default ProductosBuscar;