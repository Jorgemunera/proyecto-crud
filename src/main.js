// VAMOS A USAR EL SERVICIO
const {create, productDB} = require("./servicios");

// crear productos
create({
    name: "juguete2",
    foto: "url2.com",
    stock: 12,
    precio: 200,
    descripcion: " descripcion 2",
    isActive: true
});
console.log("db despues del primer create: ", productDB);

// obtener todos los productos
// getAll();

