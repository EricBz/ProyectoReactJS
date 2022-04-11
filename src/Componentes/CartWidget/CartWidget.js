import logo from "./logo.jpg";
import "./CartWidget.css"
import carrito from "./carrito.png"
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <div>
            <img className="logoEstilo" src={logo} alt="logo"/>
            <h1 className="titulonav">CompuStore</h1>
            <div className="bloqueCarritoCentrado">
            <div className="bloqueCarrito">
                <Link to={'/cart'} className="CartWidget">
                <img className="carrito" src={carrito} alt="carrito de compras"/>
                { getQuantity() }
        </Link>
            </div>
            </div>
        </div>
    )
}

export default CartWidget