import ItemCount from "../ItemCount/ItemCount.js"
import "../../App.css"


const ItemDetail = ({ id, img, name, descripcion, price, detalle, stock }) => {
    
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
                      <ItemCount initial={1} stock={stock} onAdd={(Quantity)=> console.log(Quantity)}/>
                      </div></div>
                    </div> 
                    </div> 
            )
        }
    
      

export default ItemDetail