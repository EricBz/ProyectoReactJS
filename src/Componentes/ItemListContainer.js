
import { getProducts, getProductsByCategory } from "./AsyncMock/AsyncMock"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css";
import ItemList from "./ItemList/ItemList";

 const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            setLoading(true)

            getProductsByCategory(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)

            getProducts().then(item => {
                setProducts(item)
            }).catch(err  => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }  

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    if(loading) {
        return <p>Cargando productos...</p>
    }

    if(products.length === 0) {
        return <p>No hay productos de esta categoria</p>
    }
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )    
    
}



export default ItemListContainer 