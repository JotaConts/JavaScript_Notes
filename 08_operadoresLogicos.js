// Operadores lógicos en JS:
// or: ||
// y: &&
// not: !

// or:
// - Devolverá true si hay al menos un true
// - Devolvera false si ambos son false

if (1 || 0) {
    console.log("valor verdadero!");
  }

// y:
// - Devolverá true si todos los valores son true
// - Devolvera false algún valor es false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log("La hora es 12:30");
}


// not:
// - Devolverá lo contrrio a su condición booleana

console.log(!false) //true