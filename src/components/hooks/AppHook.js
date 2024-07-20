import React, { useState } from "react";

const AppHook = () => {
  const [nome, setNome] = useState('');

  const handleInputChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
        <h3>Utilizando hook - useState</h3>
        <input type="text" value={nome} onChange={handleInputChange}/>
        <p>Olá, {nome}</p>
    </div>
  )
};

export default AppHook;
