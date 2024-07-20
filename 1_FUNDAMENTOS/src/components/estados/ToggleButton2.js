import React, { useState } from "react";

function ToggleButton2() {
  // setLigado é a função para atualizar essse estado
  const [ligado, setLigado] = useState(false);

  // Definindo uma funcao chamada toggle, para alternar o estado ligado
  const toggle = () => {
    // Atualizando o estado ligado para o valor contrario usando setLigado
    setLigado(!ligado);
  };

  return <div>
    <h3>Botão (Ligado/Desligado)</h3>
    {/* Botão com um evento de clique que chama a funcao 'toggle' */}
    <button onClick={toggle}>
        {ligado ? 'Ligado' : 'Desligado'}
    </button>
  </div>;
}

export default ToggleButton2;
