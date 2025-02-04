/* Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
let array = [3, 6, 12, 5, 100, 1];
let arrayOrdenado = array.sort((a, b) => a - b);
console.log(arrayOrdenado); // [ 1, 3, 5, 6, 12, 100 ]

// algoritmo de ordenamiento de burbuja: 