import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock/AsyncMock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

/*{...product} desestructura todas las prop. Prams es la que trae los ids, ya que se saca de las urls*/
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
//no se usa array porqe es un solo produco
    const { id } = useParams()

    useEffect(() => {
        getProductById(id).then(prod => {
            setProduct(prod)
        })
    }, [id])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer