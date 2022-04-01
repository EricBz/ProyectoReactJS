import { Link } from 'react-router-dom'
import "../../App.css"

const Item = ({product}) => {
 
    return (
        <div>
        <div className='contenedorCards'>
                <p>
                    {product.name}
                </p>
                <img className='imagenCards' src={product.img} alt={product.name}/>
            <section>
                    Precio: ${product.price}
            </section>           
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
        </div>
    )
}

export default Item