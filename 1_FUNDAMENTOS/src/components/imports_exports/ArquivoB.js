//arquivoB.js
import React from "react";
import { nome, saudacao } from "./ArquivoA";

const ArquivoB = () => {
  return (
    <div>
      <h3>ArquivoB</h3>
      {nome}
      {saudacao()}  //Output: Olá
    </div>
  );
};

export default ArquivoB;
