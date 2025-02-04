/* 
Suegerencia: reduce
Write a program to compute the sum and product (multiplication) 
of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let numbers = [1, 2, 3, 4];
let sum = 0; 
let product = 1; // porque son multiplicaciones y si fuera cero todo sería cero
for (let num of numbers) {
    sum += num;   // se suma y asigna a la variable sum
    product *= num;  // se multiplica y asigna a la variable product
}
console.log(`The sum is ${sum}. The product is ${product }.`);
// The sum is 10. The product is 24.


let array = [1, 2, 3, 4]; // declaro array
let sum = array.reduce((numeros, num) => numeros + num, 0); // en la funcion los parametros son numeros que son los que se acumulan  y num el valor que sigue. 
let product = array.reduce((numeros, num) => numeros * num, 1);
console.log(`The sum is ${sum}. The product is ${product}.`);
// The sum is 10. The product is 24.

 // reduce() es un método que se utiliza para reducir un array a un solo valor.