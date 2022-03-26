import ItemCount from "./ItemCount/ItemCount.js"
import { getProducts } from "./Item/Item.js"
import { useState, useEffect } from 'react'
import "../App.css"

const ItemListContainer = ({greeting}) => {
    const onAdd = (Quantity) => console.log(Quantity)

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

 //   console.log(products)
    return (
        <div>
           
            <h1>{greeting}</h1>
          <div className="contenedorPadreCards">
                {products.map(product => <div className="contenedorCards" key={product.id}><p>{product.name}</p><div><img className="imagenCards" src={product.img} alt=""/></div><p>{"$"+product.price}</p><p>{product.descripcion}</p>
                <div>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                </div>
                </div>)}
                </div>
            </div>
            
    )
}

export default ItemListContainer 