let anterior =  function (number) {
    return (--number)
    
}

console.log(anterior(3));

function triple(number) {
    return (number*3)
    
}

console.log(triple(3));

let anteriorDelTriple = function (number) {
 return (anterior(triple(number)));
    
}

console.log(anteriorDelTriple(3));

console.log(Math.random());

function saludar() {
    console.log("hola, tiempo sin verte");
    
}

saludar();

function saludarA(nombre) {
    const mensaje = "Hola tiempo sin verte "
    console.log(mensaje + nombre);
    
}

saludarA("Sebas");