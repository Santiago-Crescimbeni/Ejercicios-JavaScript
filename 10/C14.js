const prompt = require("prompt-sync")({ sigint: true });


/* 1-
 a partir de el siguiente array de edades nos solicitan realizar lo siguiente:
 
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
 

Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.
Recordemos que hay muchas formas de resolver, nuestra tarea será pensar cuál es la mejor para poder reutilizar nuestro código con diferentes array de edades.
 

const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];
*/

//Obtener en un nuevo array las edades menores a 18.

// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//     let nuevoArrayMenor18=[];
  
//     for (let i = 0; i < edades.length; i++) {
//                 if(edades[i] < 18){
//                    nuevoArrayMenor18.push(edades[i])
                                   
           
//       }
//     }
//  console.log( nuevoArrayMenor18); 

 
//  // Obtener en un nuevo array las edades mayor o igual a 18.
//  let nuevoArrayMayorIgual18=[];
//  for (let i = 0; i < edades.length; i++) {
//     if(edades[i] >= 18){
//         nuevoArrayMayorIgual18.push(edades[i])
                       

// }
// }
// console.log( nuevoArrayMayorIgual18); 
            
// // Obtener en un nuevo array las edades igual a 18.

// let nuevoArrayIgual18=[];
// for (let i = 0; i < edades.length; i++) {
//    if(edades[i] === 18){
//     nuevoArrayIgual18.push(edades[i])
                      

// }
// }
// console.log( nuevoArrayIgual18); 

// Obtener el menor.


/*
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let edadMenor;
function edadesMenor18(array){
    let min = array[0];
    for(i= 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    return edadMenor = min;
}
edadesMenor18(edades);
console.log(edadMenor);
*/


// Obtener el mayor. 


// Obtener el promedio de edades.








// Incrementar en 1 todas las edades.
// function aumentarEdad2 (array){
//   for (i = 0; i < array.length ; i++) {
//       if (array[i].edad <= 6) {
//           array[i].edad++;
//       } else if (array[i].edad >= 6 && array[i].edad <= 10) {
//           array[i].edad += 2;
//       } else {
//           array[i].edad += (array[i].edad / 2);
//       }
//   }
//   return array;
// }


// let resul= aumentarEdad2(misMascotas)
// console.log(resul);
















/*
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


function ubicandoArrays(arr){
  const nuevoArrayMenor18=[];
  const nuevoArrayMayorIgual18=[];
  const nuevoArrayIgual18=[];
  let pedirArrayaTrabajar= prompt('cual array desea trabajar?'); 
for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 18){
            nuevoArrayMenor18.push(arr[i])
          }  else if(arr[i] >= 18){          
            nuevoArrayMayorIgual18.push(arr[i])
          } else if(arr[i] === 18){
            nuevoArrayIgual18.push(arr[i])
          }  else{
             
          }          

        } return pedirArrayaTrabajar;
   }     
   let rdo=ubicandoArrays(edades)
      console.log(rdo)     
    
      */


 

 
 

            






















/*
Excelente, ahora, como ya trabajamos un array, sabemos que este puede tener como elemento cualquier tipo de dato —Number, String, Objetos Literales, Array, etc—. Para continuar con la Mesa de Trabajo trabajaremos con un array de objetos literales, para ello invitamos a repasar la clase de Objetos Literales para tener en claro su estructura y sintaxis. Podemos decir que un objeto literal es una colección de propiedades y cada propiedad es una asociación entre una clave y un valor.

/*
 Observamos que es un array por su sintaxis que comienza y termina con corchetes []
   y sus elementos tienen la sintaxis de objetos literales {}
   Entonces, podemos decir que tenemos una array de objetos literales, 
   o una colección de objetos literales
*/
/*
const arrayDeObjetosLiterales =
[
    {},
    {},
    {},
    {}
];
*/




















/*
Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {  titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo"
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente"
  }
]


Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.
*/
