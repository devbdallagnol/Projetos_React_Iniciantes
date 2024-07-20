import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOn ? "Desligado" : "Ligado"}</button>
    </div>
  );
}

export default ToggleButton;
