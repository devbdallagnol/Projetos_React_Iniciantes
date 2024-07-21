import React from "react";

function ListaDePessoas({ pessoas }) {
  return (
    <>
      <h3>Lista de Pessoas</h3>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            <strong>{pessoa.nome}</strong> - {pessoa.idade}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaDePessoas;
