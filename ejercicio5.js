/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; // array
// 1. TODAS LAS PERSONAS
console.log(people); 

// 2. BORRAR A DANI
console.log(people.splice(1,1)); 
console.log(people); // VERIFICAR QUE NO SALGA DANI

// 3. BORRAR A JUAN
console.log(people.splice(2,1)); // se borra a Juan
console.log(people); // ya no sale Juan.

// 4. PONER A LUIS AL INICIO
console.log(people.unshift("Luis")); // LO AGREGUÉ AL INICIO
console.log(people); // VEO QUE SE AGREGÓ 
console.log(people.splice(2,1)); // BORRO AL LUIS DE LA POSICION 2 QUE TIENE
console.log(people); // VERIFICO QUE YA SOLO ESTÉ LUIS AL INICIO

// 5. AGREGO MI NOMBRE AL FINAL
console.log(people.push("Valeria"));
console.log(people); // VERIFICO QUE SALGA

// 6. ITERAR HASTA MARIA 
for (let person of people) { 
    console.log(person); 
    if (person === "Maria") {
        break; 
    }
}
 o con un SWITCH 

 let nombre = "Maria";
 switch (nombre) {
     case "Luis":
         console.log("Luis");
         break;
     case "Maria":
         console.log("Maria");
         break;
     case "Camila":
         console.log("Camila");
         break;
     case "Valeria":
         console.log("Valeria");
         break;
     default:
         console.log("no coincide");
         break;
 }
 
// 7. VEO EN QUE LUGAR ESTÁ MARIA 
console.log(people.indexOf("Maria")); 

console.log(people); // VERIFICO QUE SOLO HAYAN 4 PERSONAS