let nombre = "Sebastian";
let apellido = "Tobito";

let presupuesto = 100;
let objeto1 = "mangos";
let precioObjeto1 = 10;
let objeto2 = "carne";
let precioObjeto2 = 50;
let objeto3 = "limonada";
let precioObjeto3 = 20;

let lista = objeto1 + " " + objeto2 + " " + objeto3; 

let precioTotalMercado = precioObjeto1 + precioObjeto2 + precioObjeto3;
let dineroRestante = presupuesto - precioTotalMercado;

console.log("Nombre: " + nombre + " " + apellido );
console.log("Lista: " + lista);
console.log( "Presupuesto: " + presupuesto);
console.log("Precio total del mercado: " + precioTotalMercado);
console.log("Dinero restante: " + dineroRestante);

let mercadoComprado = true

console.log(mercadoComprado);
