import logo from "./logo.jpg";
import "./CartWidget.css"
import carrito from "./carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img className="logoEstilo" src={logo} alt="logo"/>
            <h1 className="titulonav">CompuStore</h1>
            <div className="bloqueCarritoCentrado">
            <div className="bloqueCarrito">
                0
                <img className="carrito" src={carrito} alt="carrito de compras"/>
            </div>
            </div>
        </div>
    )
}

export default CartWidget