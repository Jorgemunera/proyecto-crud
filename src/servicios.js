// ENTIDAD PRODUCTOS

// precio, descripcion, foto, id, nombre, stock


let product1 = {
    id: 1,
    name: "juguete",
    foto: "url.com",
    stock: 10,
    precio: 100,
    descripcion: "url.com",
    isActivo: false
}

// lista o un array de varios productos

let productosInMemoria = []; // simulando la base datos
console.log("1. lista de productos: ", productosInMemoria);

// agregar items a un array
productosInMemoria.push(product1);

console.log("2. lista de productos: ", productosInMemoria);



