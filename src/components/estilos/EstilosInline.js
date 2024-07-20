import React from "react";

const EstilosInline = () => {
  const estiloDoComponente = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    border: "1px solid #ccc",
  };

  const estiloDoTexto = {
    color: "blue",
    fontSize: "16px",
  };


  return (
    <div style={estiloDoComponente}>
        <p style={estiloDoTexto}>Este é um componente com estilos inline</p>
    </div>
  )
};

export default EstilosInline;
