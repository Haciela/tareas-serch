/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course)); // filter() crea un nuevo array. includes() determina si un array incluye un elemento.
console.log(commonCourses); // ['Programming'] 


let cursosEstudiante1 = ['Mate', 'Español', 'Programacion'];
let cursosEstudiante2 = ['Mate', 'Sueco', 'Programacion'];

for (let curso of cursosEstudiante1) {   // se ven los cursos de estudiante1
    if (cursosEstudiante2.includes(curso)) {   // se pone condicion de si algun curso de estudiante1 se tiene en estudiante2
        console.log(curso); // se imprimen las coincidencias.
    }
} // Mate, Programacion


