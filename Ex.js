// // // // 1. push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
// let array = [1, 2, 3];
// array.push(4, 5);
// console.log(array); // Output: [1, 2, 3, 4, 5]

// // 2. pop(): Elimina el último elemento de un array y lo devuelve.
// let elementoEliminado = array.pop();
// console.log(elementoEliminado); // Output: 5
// console.log(array); // Output: [1, 2, 3, 4]

// // 3. shift(): Elimina el primer elemento de un array y lo devuelve.
// let primerElemento = array.shift();
// console.log(primerElemento); // Output: 1
// console.log(array); // Output: [2, 3, 4]

// // 4. unshift(): Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.
// array.unshift(0);
// console.log(array); // Output: [0, 2, 3, 4]

// // 5. splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// let meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
// meses.splice(1, 2, 'Mayo', 'Diciembre');
// console.log(meses); // Output: ['Enero', 'Mayo', 'Diciembre', 'Abril']

// // 6. slice(): Devuelve una copia de una parte del array dentro de un nuevo array.
// let copiaMeses = meses.slice(1, 3);
// console.log(copiaMeses); // Output: ['Mayo', 'Diciembre']

// // 7. concat(): Devuelve un nuevo array que consiste en la concatenación de dos o más arrays.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let newArray = array1.concat(array2);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// // 8. indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
// let index = newArray.indexOf(3);
// console.log(index); // Output: 2

// // 9. lastIndexOf(): Devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
// let lastIndex = newArray.lastIndexOf(3);
// console.log(lastIndex); // Output: 2

// // 10. forEach(): Ejecuta una función por cada elemento presente en el array.
// newArray.forEach((elemento, indice) => {
//   console.log(`Elemento ${elemento} en el índice ${indice}`);
// });

// // 11. map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
// let cuadrados = newArray.map(elemento => elemento ** 2);
// console.log(cuadrados); // Output: [1, 4, 9, 16, 25, 36]

// // 12. filter(): Crea un nuevo array con todos los elementos que sean divisibles entre 2.
// let pares = newArray.filter(elemento => elemento % 2 === 0);
// console.log(pares); // Output: [2, 4, 6]

// // 13. reduce(): Aplica una función acumuladora a cada valor de un array, de izquierda a derecha, para reducirlo a un único valor.
// let suma = newArray.reduce((acumulador, elemento) => acumulador + elemento, 0);
// console.log(suma); // Output: 21

// // 14. every(): Comprueba si todos los elementos en el array cumplen con la condición dada.
// let todosPares = newArray.every(elemento => elemento % 2 === 0);
// console.log(todosPares); // Output: false

// // 15. some(): Comprueba si al menos un elemento en el array cumple con la condición dada.
// let algunPar = newArray.some(elemento => elemento % 2 === 0);
// console.log(algunPar); // Output: true

// // 16. find(): Devuelve el primer elemento en el array que cumple con la función de prueba proporcionada.
// let primeroPar = newArray.find(elemento => elemento % 2 === 0);
// console.log(primeroPar); // Output: 2

// // 17. findIndex(): Devuelve el índice del primer elemento en el array que cumple con la función de prueba proporcionada.
// let indicePrimerPar = newArray.findIndex(elemento => elemento % 2 === 0);
// console.log(indicePrimerPar); // Output: 1

// // 18. includes(): Comprueba si un array incluye un determinado elemento, devuelve true o false según corresponda.
// let incluyeTres = newArray.includes(3);
// console.log(incluyeTres); // Output: true

// // 19. reverse(): Invierte el orden de los elementos de un array in place.
// let arrayReverso = newArray.reverse();
// console.log(arrayReverso); // Output: [6, 5, 4, 3, 2, 1]

// // 20. sort(): Ordena los elementos de un array localmente y devuelve el array.
// let arrayDesordenado = [3, 1, 2];
// let arrayOrdenado = arrayDesordenado.sort();
// console.log(arrayOrdenado); // Output: [1, 2, 3]

// // 21. join(): Une todos los elementos de un array en una cadena y devuelve esta cadena.
// let cadena = array.join('-');
// console.log(cadena); // Output: "0-2-3-4"

// // 22. toString(): Devuelve una cadena que representa al array y sus elementos.
// let stringArray = array.toString();
// console.log(stringArray); // Output: "0,2,3,4"

// // 23. flat(): Crea un nuevo array con todos los elementos de sub-array concatenados de forma recursiva hasta la profundidad especificada.
// let arrayAnidado = [1, [2, [3]]];
// let arrayAplanado = arrayAnidado.flat(2);
// console.log(arrayAplanado); // Output: [1, 2, 3]

// // 24. fill(): Rellena todos los elementos de un array desde un índice inicial hasta un índice final con un valor estático.
// let arrayVacio = new Array(3);
// arrayVacio.fill(0);
// console.log(arrayVacio); // Output: [0, 0, 0]

// // 25. isArray(): Devuelve true si un objeto es un array, y false si no lo es.
// let esArray = Array.isArray(arrayVacio);
// console.log(esArray); // Output: true
