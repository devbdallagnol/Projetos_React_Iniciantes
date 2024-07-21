import React, { useState } from "react";
import "./ListaDeTarefas.css";

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState("");
  const adicionarTarefa = () => {
    if (textoTarefa) {
      setTarefas([...tarefas, textoTarefa]);
      setTextoTarefa(""); // limpa txt da tarefa
    }
  };

  return (
    <div className="ListaDeTarefas">
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
