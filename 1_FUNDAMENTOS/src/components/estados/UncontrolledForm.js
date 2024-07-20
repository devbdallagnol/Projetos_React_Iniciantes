import React from "react";

function UncontrolledForm() {
  // Funcao chamada quando o formulario e enviado
  const handleSubmit = (event) => {
    // Evita comportamento padrao de recarregar a pagina ao enviar o formulario
    event.preventDefault();

    // Obtem o valor do campo de entrada diretamente do evento e do DOM
    const inputValue = event.target.input.value;

    // Exibe no console o valor do campo de entrada
    console.log("UF - Valor do campo de entrada", inputValue);
  };

  return (
    <div>
      <h3>UncontrolledForm</h3>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto sem estado do React */}
        <input type="text" name="input" />
        {/* Botão de envio do formulário */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
