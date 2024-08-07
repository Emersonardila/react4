import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Persona() {
    const { nombre = 'NombrePorDefecto', apellido = 'ApellidoPorDefecto' } = useParams();
  const [newNombre, setNewNombre] = useState(nombre);
  const [newApellido, setNewApellido] = useState(apellido);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/persona/${newNombre}/${newApellido}`);
  };

  const handleReset = () => {
    setNewNombre('');
    setNewApellido('');
  };
  return (
    <div>
      <h1>Información de Persona</h1>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nuevo Nombre:
            <input type="text" value={newNombre} onChange={(e) => setNewNombre(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Nuevo Apellido:
            <input type="text" value={newApellido} onChange={(e) => setNewApellido(e.target.value)} />
          </label>
        </div>
        <button type="submit">Actualizar</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}
