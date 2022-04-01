
const products = [
    { id: 1, name: 'Procesador', price: 10000, img:'https://gnpoint.com.ar/261-home_default/micro-intel-1200-core-i7-10700-comet-lake-29ghz-8c16t-65w-16m-intel-uhd.jpg', stock: 20, descripcion:'CPU Intel I7', category: "pcs", detalle: "Poderoso procesador de 4 nucleos, multitareas con grafica integrada."},
    { id: 2, name: 'Memoria RAM', price: 17000, img:'https://s3-sa-east-1.amazonaws.com/saasargentina/rmj49NeZQdandZ4D3QMH/imagen', stock: 20, descripcion:'Memoria RAM 16 GBs', category: "pcs", detalle: "ddr5, la ultima generacion en componentes para dotar de mayor velocidad tu pc"},
    { id: 3, name: 'MotherBoard', price: 25000, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/056/880/products/d_766980-mla43532292622_092020-o-cd372fa9ccf00b0f7316367213789069-640-0.jpg' , stock: 20, descripcion:'MotherBoard ASUS B550', category: "portatiles", detalle:"Componente fundamental para su pc, todas las conexiones de ultima generacion"},
    { id: 4, name: "Mouse", price: 1300, img: "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/6bf0ed99c663954fafc930039201ed07/l/2/l20m01.jpg", descripcion: "Mouse inalámbrico", category: "pcs", detalle:"Mouse inalámbrico con efecto de luces marca Level 20 RGB gaming"},
    { id: 5, name:"Cooler", price: 1700, img:"https://m.media-amazon.com/images/I/41L437A-SVL.jpg", descripcion:"Cooler base", category:"portatiles", detalle:"Cooler base para ventilar notebook con conexión USB" }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}
/*Parseint para que tome los valores del id y los pase a valor numerico*/


