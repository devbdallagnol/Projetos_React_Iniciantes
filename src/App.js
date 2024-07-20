import './App.css';
import MeuComponente from './components/MeuComponente';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <h1>React para Iniciantes</h1>
      <hr />
      <div className='div-cards'>
        <div className='div-card'>
          <MeuComponente />
        </div>
        <div className="div-card">
          <Titulo />
        </div>
      </div>
    </div>
  );
}

export default App;
