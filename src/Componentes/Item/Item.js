
const products = [
    { id: 1, name: 'Procesador', price: 10000, img:'https://gnpoint.com.ar/261-home_default/micro-intel-1200-core-i7-10700-comet-lake-29ghz-8c16t-65w-16m-intel-uhd.jpg', stock: 20, descripcion:'CPU Intel I7'},
    { id: 2, name: 'Memoria RAM', price: 17000, img:'https://s3-sa-east-1.amazonaws.com/saasargentina/rmj49NeZQdandZ4D3QMH/imagen', stock: 20, descripcion:'Memoria RAM 16 GBs'},
    { id: 3, name: 'MotherBoard', price: 25000, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/056/880/products/d_766980-mla43532292622_092020-o-cd372fa9ccf00b0f7316367213789069-640-0.jpg' , stock: 20, descripcion:'MotherBoard ASUS B550'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}