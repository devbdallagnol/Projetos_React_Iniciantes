import React from 'react'

function ListaDeNomes({nomes}) {
  return (
    <ul>
        {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
        ))}
    </ul>
  )
}

export default ListaDeNomes
