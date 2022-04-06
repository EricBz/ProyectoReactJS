
const products = [
    { id: 1, name: 'Procesador', price: 10000, img:'https://gnpoint.com.ar/261-home_default/micro-intel-1200-core-i7-10700-comet-lake-29ghz-8c16t-65w-16m-intel-uhd.jpg', stock: 20, descripcion:'CPU Intel I7', category: "pcs", detalle: "Poderoso procesador de 4 nucleos, multitareas con grafica integrada."},
    { id: 2, name: 'Memoria RAM', price: 17000, img:'https://s3-sa-east-1.amazonaws.com/saasargentina/rmj49NeZQdandZ4D3QMH/imagen', stock: 20, descripcion:'Memoria RAM 16 GBs', category: "pcs", detalle: "ddr5, la ultima generacion en componentes para dotar de mayor velocidad tu pc"},
    { id: 3, name: 'MotherBoard', price: 25000, img:'https://axa.com.ar/webaxa/21540-medium_default/motherboard-asus-prime-b550m-k-amd-b550-ddr4-ryzen.jpg' , stock: 20, descripcion:'MotherBoard ASUS B550', category: "portatiles", detalle:"Componente fundamental para su pc, todas las conexiones de ultima generacion"},
    { id: 4, name: "Mouse", price: 1300, img: "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/6bf0ed99c663954fafc930039201ed07/l/2/l20m01.jpg", stock: 20, descripcion: "Mouse inalámbrico", category: "pcs", detalle:"Mouse inalámbrico con efecto de luces marca Level 20 RGB gaming"},
    { id: 5, name:"Cooler", price: 1700, img:"https://m.media-amazon.com/images/I/41L437A-SVL.jpg", stock: 20, descripcion:"Cooler base", category:"portatiles", detalle:"Cooler base para ventilar notebook con conexión USB" },
    { id: 6, name: "Teclado", price: 1500, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/067/624/products/b11-5fee2624ee5635664316210211070459-1024-1024.jpg", stock: 15, descripcion: "Teclado gamer", category: "pcs", detalle:"Teclado gamer iluminado, cuenta con conexión USB, contiene teclas multimedia para un uso mas cómodo." },
    { id: 7, name: "Funda", price: 7500, img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/127/956/products/feed_ig_ihelp_marzo-2021_mesa-de-trabajo-1-copia-911-9e51389c4dbd842e8116179418513834-640-0.png", stock: 10, descripcion: "Funda para notebook", category: "portatiles", detalle:"Funda estuche para notebook 14¨, diferentes detalles coloridos. Protege tu máquina."},
    { id: 8, name: "Disco rígido", price: 8000, img:"https://www.compusyspy.com/wp-content/uploads/2020/10/250samsung.jpg", stock: 12, descripcion: "Disco rígido de 1 TB", category: "notebook", detalle: "Disco rígido para notebooks de 1 TB de capacidad, conexión SATA."},
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
