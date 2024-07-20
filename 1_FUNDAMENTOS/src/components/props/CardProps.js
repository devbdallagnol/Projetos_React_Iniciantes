import React from "react";

const CardProps = ({ title, image, description }) => {
  return (
    <div className="card">
      {/* Renderiza a img usando a URL fornecida na prop 'image', com um texto alternativo baseado no titulo */}
      <img src={image} alt={title} style={{ width: "200px" }} />
      {/* Renderiza o titulo usando a prop 'title' */}
      <h2>{title}</h2>
      {/* Renderiza a descrição usando a prop description */}
      <p>{description}</p>
    </div>
  );
};

export default CardProps;
