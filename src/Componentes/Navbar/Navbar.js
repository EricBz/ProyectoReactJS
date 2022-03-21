import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";


function Navbar() {
    return (
      <div>
        <div>
        
         </div>
        <nav className="navEstilo">
        <CartWidget/>
          <ul>
              <li><a href="../../index.js">Home</a></li>
              <li><a href="../../index.js">Pcs</a></li>
              <li><a href="../../index.js">Portátiles</a></li>
          </ul>
        </nav>
        
      </div>
    );
  }

 export default Navbar