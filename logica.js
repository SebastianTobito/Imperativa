let n1 = 8;
let n2 = 9;
console.log(n1 === n2);
console.log(n2 >= n1);

console.log(!((5>4 || 3<6) && (8==5)));

console.log(true || true && false);
console.log((true || true)&& false);

console.log("-----repaso-----");
console.log(!true);
console.log(!false);
console.log(!!false);
console.log(!!true);
console.log(!1);
console.log(!!1);
console.log(!0);
console.log(!!0);
console.log(!!"");
let x = 5;
let y = 9;
console.log(x<10 && x!==5);
console.log(x>9 || x===5);
console.log(!(x===y));

console.log("-----parte 2-----");
let a = 10;
let b = "a"
console.log( b === "b" || a>=10);
let c = 3;
let d = 8;
console.log(!(c=="3" || c === d) && !( d!==8 && c<=d));
let str="";
let msj="jaja!";
let esGracioso = "false";
console.log(!((str || msj) && esGracioso));

console.log("-----Parte 3-----");
let edad = 12;
let altura = 1.30;
console.log( 15>edad && 1.50>altura );
console.log( 10>edad && 1.50>altura );

let nota = 7;
let final = 4;
console.log(( 8>=nota && 2>=nota)|| 7 >= final);