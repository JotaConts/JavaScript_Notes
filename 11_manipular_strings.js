// Métodos para strings:

// .length arroja el largo del string

// .slice recoge el trozo indicado de un string:
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);


// Insertar variables en un string con ${}
let name = "Jota";
let frase = 'Hola ${name}, bienvenido';
console.log(frase)

// Lower an Upper case:

let myName = "Jota";
let name_upper = myName.toUpperCase();
let name_lower = myName.toLowerCase();
console.log(name_upper, name_lower);

// Reemplazar una cadena por otra:

let word = "Mozilla"
let new_word = word.replace("Moz", "Van")
console.log(word, new_word)

// Quitar espacios previos, finales o ambos
//         --> .trimStart() .trimEnd() .trim()