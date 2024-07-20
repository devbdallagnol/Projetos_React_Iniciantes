import React from "react";

function ConditionalRenderingExample(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <p>Bem-vindo, usuário!</p>
      ) : (
        <p>Por favor, faça login.</p>
      )}
    </div>
  );
}

export default ConditionalRenderingExample;
