import Item from "../Item/Item.js"
import "../../App.css"

//Rec: Para mantener tarjetas con flex necesario mantener el div con la clase padre
const ItemList = ({ products}) => {

    return (
        <div className="contenedorPadreCards">
            {products.map(product => <Item key={product.id} product={product}/>)}
            
        </div>
    )
}

export default ItemList