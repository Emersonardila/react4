import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSuccess(true);
  };
  return (
    <div>
      <h1>Contacto</h1>
      {success ? (
        <div>
          <p>Mensaje enviado con éxito!</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Mensaje:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  )
}
