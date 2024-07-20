import React, { useState } from "react";

function InputControlado() {
  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    // Atualiza o estado 'texto' com o valor digitado no input
    setTexto(event.target.value);
  };

  return <div>
    <h3>Input Controlado</h3>
    <input 
        type="text"
        value={texto} 
        onChange={handleChange}
        placeholder="Digite algo"
    />
    {/* Exibindo o que foi digitado no input usando o estado 'texto' */}
    <p>Você digitou: {texto}</p>
  </div>;
}

export default InputControlado;
