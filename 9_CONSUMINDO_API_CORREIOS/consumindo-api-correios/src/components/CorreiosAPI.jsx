import React, { useState } from "react";
import "./CorreiosAPI.css";

function CorreiosAPI() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({});
  const [erro, setErro] = useState(null);

  // Funcao para consultar o CEP
  const consultarCep = async () => {
    try {
      // Faz requisicao a API dos correios
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("CEP não encontrado");
      }
      // Obtém os dados do endereço a partir da resposta
      const data = await response.json();
      // Atualiza o estado com os dados do endereço
      setEndereco(data);
      // Limpa msg de erro
      setErro(null);
    } catch (error) {
      // Em caso de erro, limpa os dados de endereço e exibe a msg de erro
      setEndereco({});
      setErro(error.message);
    }
  };

  return (
    <div className="Consulta">
      <h1>Consulta de CEP</h1>
      <div>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={consultarCep}>Consultar</button>
        {erro && <p className="erro">{erro}</p>}
      </div>
      <h2>Dados do Endereço</h2>
      <p><strong>CEP:</strong> {endereco.cep}</p>
      <p><strong>Rua:</strong> {endereco.logradouro}</p>
      <p><strong>Bairro: </strong>{endereco.bairro}</p>
      <p><strong>Cidade:</strong> {endereco.localidade}</p>
      <p><strong>Estado:</strong> {endereco.uf}</p>
    </div>
  );
}

export default CorreiosAPI;
