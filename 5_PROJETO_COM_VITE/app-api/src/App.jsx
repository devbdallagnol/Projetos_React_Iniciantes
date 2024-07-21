import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // Definindo um estado inicial 'data' como um array vazio e um método 'setData'
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dentro do useEffect, estamos fazendo uma solicitacao GET usando o metodo nativo 'fetch'
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Quando a solicitacao é bem-sucedida, atualizamos o estado 'data' com os dados da resposta
        setData(response.data);
        
        })

        .catch((error) => {
          // Sehouver um erro na solicitacao, registramos o erro no console
          console.error("Erro ao buscar os dados:", error);
        });
      }, []); // O array vazio[] como segundo argumento faz com que este efeito seja executado apenas uma vez após a montagem do componente


  // Renderizando o componente
  return (
    <div>
      {/* Titulo do componente */}
      <h1>Dados da API</h1>

      {/* Renderizando uma lista não ordenada (ul) */}
      <ul>
        {/* Mapeando os dados no estado 'data' e renderizando elementos de lista (li) */}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
