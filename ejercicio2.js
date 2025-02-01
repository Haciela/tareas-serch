/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

// profe, coloco comentarios para yo entender bien como lo hago poco a poco y se me quedé mejor la retención y comprensión. 

// con map
let numbers = [1, 2, 3, 4, 5]; // declaro el arreglo
doubleNumbers = () => {  // función flecha
  let doubledNumbers = numbers.map(number => number * 2);  // le pido a map que haga un arreglo y en parentesis son las caracteristicas y es que sea number pero al doble
  console.log(doubledNumbers); // imprimo el arreglo
}
doubleNumbers(); // [2, 4, 6, 8, 10]

//--------------------------------------------------------------- 

// con ciclo for 
let num = [1, 2, 3, 4, 5]; // array 
num = () => { // arrow function 
  let doubledNum = []; // se debe declarar un empty array para el resultado
    for (let i = 0; i < num.length; i++) { // for se compone de inicializacion, condicion y si hay aumenta o decremento.
        // inicia en cero, la condicion es que sea menor al length del array e incrementa en uno
        doubledNum.push(num[i] * 2); // push para agregar elemento pero que se multiplique por dos
    }
    console.log(doubledNum);
    }
  num(); // [2, 4, 6, 8, 10]

// map sirve para recorrer un array y devolver un nuevo array con los elementos modificados.
