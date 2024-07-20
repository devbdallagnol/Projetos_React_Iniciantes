import React from "react";

function Botao(props) {
  return (
    <div>
      <button
        style={{
          width: "150px",
          backgroundColor: props.cor,
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        {props.texto}
      </button>
    </div>
  );
}

export default Botao;
