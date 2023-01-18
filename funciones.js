//funciones expresadas

let sumar = function(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(sumar(1,2));

//funciones declarada

function elDoble(unNumero) {
    return unNumero*2;
}

console.log(elDoble(6));

//ejemplo scope

let mensaje = "Hola amigo";

function saludar() {
 let mensaje = "Nos vemos amigo";
    return mensaje;
    
}

console.log(mensaje);
console.log(saludar());