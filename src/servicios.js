// ENTIDAD PRODUCTOS

// Propiedades:
// precio, descripcion, foto, id, nombre, stock
let nextId = 1;

let product1 = {
    id: nextId,
    name: "juguete",
    foto: "url.com",
    stock: 10,
    precio: 100,
    descripcion: "descripcion 1",
    isActivo: false
}


// lista o un array de varios productos
let productDB = []; // simulando la base datos

// agregar items a un array
productDB.push(product1);

// CRUD
// CREATE, READ, UPDATE, DELETE

    // name: "juguete2",
    // foto: "url2.com",
    // stock: 12,
    // precio: 200,
    // descripcion: "descripcion 2",
    // isActivo: false

function create(dataProduct) {
    const id = nextId + 1;
    const newProduct = {...dataProduct, id: id};
    productDB.push(newProduct);

    return newProduct;
};

// crear la funcion de READ (getAll)

module.exports = {
    create,
    productDB,
    nextId
}

