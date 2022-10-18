//To String
let respuesta = true;
console.log(typeof respuesta); // boolean

respuesta = String(respuesta);
console.log(typeof respuesta) // string


//To Number
let str = "123";
console.log(typeof str); // string

let num = Number(str); // se convierte en 123
console.log(typeof num); // number


//To Boolean
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hola") ); // true
console.log( Boolean("") ); // false