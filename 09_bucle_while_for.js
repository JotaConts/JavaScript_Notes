// Bucle while:
let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  console.log(i);
  i++;
}

// Bucle do while:
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 3);

// Bucle for (range):
for (let i = 0; i < 3; i++) {
    console.log(i);
  }

// También podemos eliminar la parte step:
let e = 0;
for (; e < 3;) {
  console.log( e++ );
}
// Esto hace al bucle idéntico a un bucle while (e < 3)


// Podemos forzar la salide con 'break' y saltar una iteración con 'continue'

// ETIQUETAS
// Si estamos en un bucle anidado y queremos salir de él pero a la vez del principal,
// podemos usar una etiqueta que nos saque de ambos bucles de inmediato.
// Nombramos la etiqueta seguido de dos puntos antes de la declaració del for.
// Dentro del for anidado idicamos la condición seguido de 'break <etiqueta>'.

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
      if (!input) break outer; // (*)
  
      // hacer algo con el valor...
    }
  }

//También podemos mover la etiqueta a una línea separada:

// outer:
// for (let i = 0; i < 3; i++) { ... }
//   console.log('Listo!');

