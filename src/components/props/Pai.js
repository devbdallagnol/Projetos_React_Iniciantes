import React from "react";
import Filho from "./Filho";

function Pai() {
  const mensagem = "Olá do Pai para o Filho!";

  return (
    <div>
        <Filho mensagem={mensagem} />
    </div>
  )
}

export default Pai;
