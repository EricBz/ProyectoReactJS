import { useContext } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import "../../App.css"


const Cart = () => {

    const { cart, clearCart, getPrice, removeItem, getQuantity } = useContext(CartContext)
    if (getQuantity() !== 0 ) {
    return (
        <div className="bloqueCart">
            
            <h1>Compras</h1>
            
            <div >
            
                <table className="bloqueTabla">
                    <tbody>
                        {cart.map(prod => <tr key={prod.id}><td><b>{prod.name}</b> x {prod.quantity} unidades </td><td>{prod.price * prod.quantity}  ({prod.price} c/u)</td><td><button className="botonesTabla" onClick={() => { removeItem(prod.id) }}> Eliminar unidad</button></td></tr>)}
                        <tr><th>Total a pagar</th>
                            <th>{getPrice()} </th>
                            <th><button className="botonesTabla" onClick={clearCart}>Vaciar carrito</button></th></tr>
                            </tbody>       
                </table>
                <div className="bloqueBotonPagar">
                <button onClick={()=>console.log("Usted abono correctamente ")} className="botonesTablaPagar">Terminar mi compra</button>
                </div>   
                
            </div>
        </div>
    )} else {
        return(
        <div className="bloqueLinkContinuar">Aún no ha añadido ningún producto a su carrito...
         
                <Link to={'/'} className="linkContinuarComprando">Continuar comprando</Link>
                </div>
        )
    }
}

export default Cart