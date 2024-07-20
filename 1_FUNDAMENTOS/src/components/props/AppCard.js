import React from "react";
// img
import Img1 from "../../img/logica.png";
import Img2 from "../../img/javascript.png";
import Img3 from "../../img/html5.png";
import CardProps from "./CardProps";

const AppCard = () => {
  const cursos = [
    {
      title: "Curso 1",
      image: Img1,
      description: "Lógica de Programação",
    },
    {
      title: "Curso 2",
      image: Img2,
      description: "Javascript",
    },
    {
      title: "Curso 3",
      image: Img3,
      description: "HTML - CSS - Bootstrap",
    },
  ];

  return (
    <div>
      <h3>Cursos</h3>
      {/* Cria um container para os cartões do curso */}
      <div className="card-container">
        {/* Mapeia o array de cursos e renderiza um Card para cada um */}
        {cursos.map((curso, index) => (
          <CardProps
            key={index}
            title={curso.title}
            image={curso.image}
            description={curso.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AppCard;
