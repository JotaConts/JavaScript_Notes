// Condicional if:

let year = 2015;
if (year > 2015) {
    console.log("¡Es Correcto!");
    console.log("¡Eres muy inteligente!");
  }
else if (year == 2015){
    console.log("Bastante bien");
}
else {
    console.log("Error level");
}


// Condicional ?:

// let result = condition ? value1 : value2;
// Si se da la condición devolverá el primer valor y si no devolverá el 2do

years = 53

let mayorDeEdad = (years>17) ? "Bienvenido" : "No puedes entrar";
console.log(mayorDeEdad)

// multiples condiciones:

let rangoEdad = (years<=12) ? "Eres un niño":
    (years<12) ? "Eres adolescente":
    (years<17) ? "Eres joven":
    (years<30) ? "Eres adulto-joven":
    (years<45) ? "Eres adulto":
    "Te has puesto viejo!"

console.log(rangoEdad)