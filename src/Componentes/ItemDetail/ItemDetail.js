import ItemCount from "../ItemCount/ItemCount.js"
import "../../App.css"
import { useState } from 'react' 
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, img, name, descripcion, price, detalle, stock }) => {
  const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        setQuantity(count)
      
    }
    //Recordar variable stock.    
//<ItemCount initial={1} stock={stock} onAdd={(Quantity)=> console.log(Quantity)}/>
    return (
              <div className="contenedorExternoMargen">
                <div className="ContenedorDetalle">
                        <div key={id} className="contenedorNomrbreImgDetalle">
                          <p key={id}><strong>{name}</strong><br/><span>{descripcion}</span><br/>
                          <span>Precio = $ {price}</span></p>
                          <img className="imagenDetalle" src={img} alt='product'/><br/>
                        </div>
                        <div>
                      <div className="contenedorDetalle" >{detalle}</div>
                      
                      <div className="ContenedorContadorDetail">
                      {quantity === 0 ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <Link to='/cart' className="botonIrAlCarrito">Ir al carrito</Link>}
                      </div></div>
                      
                    </div> 
                    </div> 
            )
        }
    
      

export default ItemDetail