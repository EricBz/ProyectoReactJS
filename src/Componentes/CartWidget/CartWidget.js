import logo from "./logo.jpg";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div>
            <img className="logoEstilo" src={logo} alt="logo"/>
            <h1 className="titulonav">CompuStore</h1>
        </div>
    )
}

export default CartWidget