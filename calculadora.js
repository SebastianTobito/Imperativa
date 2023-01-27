//Función sumar

let sumar = function (numeroA, numeroB) {
    return numeroA+numeroB;
}

//Función restar

let restar = function (numeroA, numeroB) {
    return numeroA-numeroB;
}

//Función multiplicar

let multiplicar = function (numeroA, numeroB) {
    return numeroA*numeroB;
}

//Función dividir 

let dividir = function (numeroA, numeroB) {
    return numeroA/numeroB;
}

console.log("------ Testeo de operaciones/calculadora------");
console.log(sumar(18,7), restar(33,12));
console.log(multiplicar(6,11), dividir(36,3));
console.log(dividir(12,0));
console.log(dividir(0,21));

//Función cuadrado de un número

let cuadradoDeUnNumero = function (numeroA) {
    return multiplicar(Math.pow(numeroA,2))
}
console.log(cuadradoDeUnNumero(12));

//Función promedio de tres numeros

let promedioDeTresNumeros = function (numeroA, numeroB, numeroC) {
    return (sumar(numeroA,numeroB)+numeroC)/3;
}

console.log(promedioDeTresNumeros(12,3,5));

//Función calcular porcentaje

let calcularPorcentaje = function (numeroA,numeroB) {
    return multiplicar(numeroA,numeroB)/100
}

console.log(calcularPorcentaje(300,15));

//Función generador de porcentaje

let generadorPorcentaje = function (numeroA,numeroB) {
    return  dividir((numeroA*100),numeroB)
}

console.log(generadorPorcentaje(150,200));