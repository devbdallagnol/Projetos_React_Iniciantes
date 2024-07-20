import React from "react";
import Botao from "./Botao";

function AppPai() {
  const handleClick = () => {
    console.log("Botão clicado");
  };

  return (
    <div>
      <h3>Exemplo de botões com props</h3>
      <Botao cor="blue" texto="Botão Azul" onClick={handleClick} />
      <Botao cor="green" texto="Botão Verde" onClick={handleClick} />
    </div>
  );
}

export default AppPai;
