import React, { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // Atualiza o estado 'inputValue' com o valor do campo de entrada
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    // Evita o comportamento padrao de recarregar a página ao enviar o form
    event.preventDefault();

    // Exibe o valor do campo de entrada
    console.log('Valor do campo de entrada:', inputValue)
  };

  return <div>
    <h3>ControlledForm</h3>
    <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto com o valor vinculado ao estado 'inputValue' */}
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange} 
        />

        {/* Botão de envio do formulário */}
        <button type="submit">Enviar</button>
    </form>
  </div>;
}

export default ControlledForm;
