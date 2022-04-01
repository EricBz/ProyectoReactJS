import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <div>
        <nav className="navEstilo">
        <CartWidget/>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/category/pcs'>Pcs</Link></li>
            <li><Link to='/category/portatiles'>Portátiles</Link></li>
          </ul>
        </nav>
        
      </div>
    );
  }

 export default Navbar