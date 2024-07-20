import React from "react";

function ConditionalRenderingExample2(props) {
  if (props.isAdmin) {
    return <p>Você tem acesso de administrador.</p>;
  } else {
    return <p>Você não tem acesso de administrador.</p>;
  }
}

export default ConditionalRenderingExample2;
