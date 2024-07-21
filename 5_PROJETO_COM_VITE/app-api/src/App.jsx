import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Definindo um estado inicial 'data' como um array vazio e um método 'setData'
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dentro do useEffect, estamos fazendo uma solicitacao GET usando o metodo nativo 'fetch'
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Verificamos se a resposta não tem um status HTTP de erro(ex: 404 ou 500)
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }

        // Se a resposta estiver OK, convertemos os dados da resposta em formato JSON
        return response.json();
      })
      .then((jsonData) => {
        // Quando a conversão para JSON é concluída, atualizamos o estado 'data' com os dados obtidos
        setData(jsonData);
      })
      .catch((error) => {
        // Se ocorrer um erro durante o processo, registramos o erro no console
        console.error("Erro ao buscar dados:", error);
      });
  }, []); // O array vazio[] como segundo argumento faz com que este efeito seja executado uma vez após a montagem do componente

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
  )
}

export default App;
