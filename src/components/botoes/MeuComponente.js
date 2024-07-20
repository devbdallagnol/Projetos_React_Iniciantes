import React, { useState } from "react";

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return <div>
    <h3>Meu Componente</h3>
    <h4>Contador: {contador}</h4>
    <button onClick={aumentarContador}>Aumentar</button>
  </div>;
};

export default MeuComponente;
