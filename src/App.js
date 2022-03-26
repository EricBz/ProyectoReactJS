
import './App.css';
import Navbar from "./Componentes/Navbar/Navbar.js";
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="Bienvenidos."/>
      </header>
    </div>
  );
}

export default App;
