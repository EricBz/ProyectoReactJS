import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from 'react-router-dom';
import logo from "../CartWidget/logo.jpg"

function Navbar() {
    return (
      <div>
        <nav className="navEstilo">
        <img className="logoEstilo" src={logo} alt="logo"/>
            <h1 className="titulonav">CompuStore</h1>
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