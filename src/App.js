import './App.css';
import Navbar from "./Componentes/Navbar/Navbar.js";
import ItemListContainer from './Componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js';
import { CartContextProvider } from './Componentes/context/CartContext'
import Cart from './Componentes/Cart/Cart';

/*va entre header y browser <ItemListContainer greeting="Bienvenidos."/>*/
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      
      </header>
    </div>
  );
}

export default App;
