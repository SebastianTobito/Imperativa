// funcion que convierta pulgadas a centimetros

let dePulgadasACentimetros = function (pulgadas) {
    return pulgadas * 2.54;
    
}

console.log(dePulgadasACentimetros(10));

//función que convierta un string en una url

let stringAUrl = function (string){
   return "http://www." + string +".com";
}

console.log(stringAUrl("sebas"));

//funcion que reciba una frase y le agregue un signo de admiración

let fraseAdmiracion = function(frase){
 return frase + "!";
}

console.log(fraseAdmiracion("el día está soleado"));

//funcion que calcule la edad de los perros *7 

let edadPerros = function(edadPerro){
 return edadPerro * 7;
}

console.log(edadPerros(14));

//función que calcule la hora de trabajo, con un sueldo mensual y con 40 horas de trabajo mensual 

let sueldoHora = function (sueldoMensual) {
    return sueldoMensual/40;
}

console.log(sueldoHora(350));

// función que calcula el indice de masa corporal con altura y peso de una persona 

let indiceMasaCorporal = function (altura, peso) {
    return peso/(altura *2 );
}

console.log(indiceMasaCorporal(1.7, 78));

// una función que recibe minusculas y retonre mayusculas 

let convertirAMayusculas = function (frase) {
    return frase.toUpperCase();
    
}

console.log(convertirAMayusculas("tengan una buena noche"));

// funcion que toma un parametro y dice cuál es su tipo de dato

let tipoDeDato = function (parametro) {
    return typeof(parametro);    
}

console.log(tipoDeDato(true));

//función para allár la circunferencia de un circulo 

let circunferencia = function (diametro) {
    return Math.PI*diametro;
}

console.log(circunferencia(10));