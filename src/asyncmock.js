const misProductos = [
    { id: "1", nombre: "Yerba", stock:10, precio: 500, img: "../img/yerba.jpg", idCat: "lacteos"},
    { id: "2", nombre: "Fideos", stock:10, precio: 200, img: "../img/fideos.jpg", idCat: "lacteos"},
    { id: "3", nombre: "Arroz", stock:10, precio: 300, img: "../img/arroz.jpg", idCat: "almacen"},
    { id: "4", nombre: "Aceite", stock:10, precio: 900, img: "../img/aceite.jpg", idCat: "almacen"},
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 100);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item =>item.id === id);
            resolve(producto)
        },100)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1000)
    })
}