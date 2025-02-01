/* 
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/
// profe, coloco comentarios para yo entender bien como lo hago poco a poco y se me quedé mejor la retención y comprensión. 

let arr = ["This", "is", "a", "sentence."]; // declarar array
function printOutString() {  // funcion.
  console.log(arr.join(" "));
}
printOutString(); // This is a sentence.

// intenté hacer una arrow function pero al ponerlo en el navegador me detectaba error y al hacerlo así, si me salió.

/* join() sirve para unir los elementos de un array en un string.
