import ItemCount from "./ItemCount/ItemCount.js"

const ItemListContainer = ({greeting}) => {
    const onAdd = (Quantity) => console.log(Quantity)


    return (
        <div>
        <ItemCount initial={1} stock={25} onAdd={onAdd}/>
            <h1>{greeting}</h1>
            </div>
    )
}

export default ItemListContainer 