import "./Navbar.css";
import CartWidget from "../CartWidget.js";
import logo from "./logo.jpg";

function Navbar() {
    return (
      <div>
        <div>
         <img className="logoEstilo" src={logo} alt="logo"></img>
         <h1 className="titulonav">CompuStore</h1>
         </div>
        <nav className="navEstilo">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pcs</a></li>
              <li><a href="#">Portátiles</a></li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
    );
  }

 export default Navbar