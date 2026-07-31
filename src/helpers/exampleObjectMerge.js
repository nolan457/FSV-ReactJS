/* COMBINACION DE OBJETOS */
let datosPersonales = {
  nombre: "Laura",
  edad: 40,
  tarea: "Developer",
};

let datosLaborales = {
  empresa: "Microsoft",
  cargo: "Developer",
  tarea: "Desarrollo de aplicaciones",
}

let info1 = {
  proyecto: "proyecto A",
  deadline: "04-05-2027",
}

let info2 = {
  proyecto: "proyecto B",
  deadline: "08-7-2027",
}

// ---PRIMEROS DATOS--- 
let { nombre, edad } = datosPersonales;
let { empresa, cargo, tarea } = datosLaborales;

console.log( `Nombre: ${nombre}, Edad: ${edad}`);
console.log(` Empresa: ${empresa}, Cargo: ${cargo}, Tarea: ${tarea}`);

let { proyecto: proyecto1, deadline: deadline1 } = info1
let { proyecto: proyecto2, deadline: deadline2 } = info2

// ---SEGUNDOS DATOS---
console.log(`Proyecto: ${proyecto1}, Fecha límite: ${deadline1}`);
console.log(`Proyecto: ${proyecto2}, Fecha límite: ${deadline2}`);

// COMBINACION DE LOS DATOS 1
let objetoCombinado = {...info1, ...info2};
console.log('Objeto combinado:', objetoCombinado);

// COMBINACION DE LOS DATOS 2
let objetoCombinado2 = Object.assign({}, datosPersonales, datosLaborales);
console.log('Segundo Objeto Combinado:', objetoCombinado2);
