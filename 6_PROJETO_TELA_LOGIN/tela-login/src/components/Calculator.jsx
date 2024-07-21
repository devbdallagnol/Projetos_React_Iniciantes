import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Erro");
      }
      setExpression(""); // limpa apos o calculo
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="Calculator">
      <h2>Calculadora Simples</h2>
      <div className="display">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>

        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
