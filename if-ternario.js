//ternario 

let fruta = "PERA";

let resultado = fruta == "manzana"? "que bueno, me gustan las manzanas" : "quería manzana"

console.log(resultado);

//switch

let semaforo = ""

switch (semaforo) {
    case "verde": 
        console.log("puedo cruzar");
        break;
    case "amarillo":
    console.log("precausión, el semaforo va a cambiar pronto");
        break;
    case "rojo":
        console.log("alto, no pasar");
        break
    default:
        console.log("no funciona el semaforo");
    break
}