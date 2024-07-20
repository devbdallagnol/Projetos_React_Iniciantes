import "./App.css";
import Card from "./components/Card";
import MeuComponente from "./components/MeuComponente";
import Titulo from "./components/Titulo";
import EstilosInline from "./components/estilos/EstilosInline";
import MyComponent from "./components/estilos/MyComponent";
import MyComponent2 from "./components/estilos/MyComponent2";
import ArquivoB from "./components/imports_exports/ArquivoB";
import ArquivoD from "./components/imports_exports/ArquivoD";
import ArquivoF from "./components/imports_exports/ArquivoF";
import ArquivoH from "./components/imports_exports/ArquivoH";

function App() {
  return (
    <div className="App">
      <h1>React para Iniciantes</h1>
      <hr />
      <div className="div-cards">
        <div className="div-card">
          <MeuComponente />
        </div>
        <div className="div-card">
          <Titulo />
        </div>
        <div className="div-card">
          <ArquivoB />
          <ArquivoD />
          <ArquivoF />
          <ArquivoH />
        </div>
        <div className="div-card">
          <Card />
        </div>
        <div className="div-card">
          <MyComponent />
        </div>
        <div className="div-card">
          <EstilosInline />
        </div>
        <div className="div-card">
          <MyComponent2 />
        </div>
      </div>
    </div>
  );
}

export default App;
