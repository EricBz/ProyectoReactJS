import { useContext, useState } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import "../../App.css"
import { createOrderAndUpdateStock } from '../../services/firebase'
import { useNotification } from '../../notification/notification'


const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, clearCart, getPrice, removeItem, getQuantity } = useContext(CartContext)
    const { setNotification } = useNotification()
    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Eric',
                phone: '123456789',
                email: 'eric@prueba.com'
            },
            items: cart,
            total: getPrice()
        }


        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setNotification('success', `La orden se genero correctamente, su codigo es: ${id}`)
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }


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
                            <th><button className="botonesTabla" onClick={clearCart}>Vaciar carrito</button></th>
                            </tr>
                            </tbody>       
                </table>
                <div className="bloqueBotonPagar">
                <button onClick={createOrder} className="botonesTablaPagar">Terminar mi compra</button>
                </div>   
                
            </div>
        </div>
    )} else {
        return(
        <div className="bloqueLinkContinuar">Si desea ver nuestro catálogo...
         
                <Link to={'/'} className="linkContinuarComprando">Continuar comprando</Link>
                </div>
        )
    }
}

export default Cart