

BUSQUEDA BINARIA


// let numeros = [2,4,6,8,10];

// //Realizar una funcion que retorne la ubicacion del numero 4

// //Busqueda lineal
// function busquedaLineal(arreglo, num){

//     for(let i=0 ; i<arreglo.length ; i++){

//         if(arreglo[i] === num){
//             return i;
//         }
//     }
//     return null;
// }

// //console.log(busquedaLineal(numeros,4));


// //Busqueda binaria



// let personas = [
//     {
//         nombre: "Pepe",
//         edad : 5
//     },
//     {
//         nombre: "Pepito",
//         edad : 10
//     },
//     {
//         nombre: "Pepe",
//         edad : 45
//     }
// ]


// function busquedaBinaria(arreglo,num){

//     let inicio = 0;

//     let final = arreglo.length - 1;

//     while(inicio <= final){

//         let indiceMitad = Math.round((inicio+final)/2);

//         let elementoMitad = arreglo[indiceMitad].nombre;

//         if(elementoMitad === num){
//             return indiceMitad;
//         }

//         if(elementoMitad > num){
//             final = indiceMitad - 1;
//         }
//         else{
//             inicio = indiceMitad + 1;
//         }
//     }
// }


// //console.log(Math.round(2.5));

// console.log(busquedaBinaria(personas,"Pepito"));