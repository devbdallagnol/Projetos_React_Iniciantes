import "./App.css";
import CardBody from "./components/CardBody";
import Footer from "./components/Footer";
import ListaDePessoas from "./components/ListaDePessoas";
import NavBar from "./components/NavBar";
import Home from "./roteamentos/Home";

function App() {
  const pessoas = [
    { id: 1, nome: "Flavio", idade: 25 },
    { id: 2, nome: "Antonia", idade: 30 },
    { id: 3, nome: "Carlos", idade: 22 },
  ];

  return (
    <div className="App">
      <NavBar />
      <CardBody />
      <ListaDePessoas pessoas={pessoas}/>
      <hr />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
