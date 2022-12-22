const prompt = require("prompt-sync")({ sigint: true });



// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
// menor a mayor o no.
// a. si están ordenados retornar true
// b. caso contrario retorna false


// ejemplos de arrays
// [4,9,2,5,6,7,1,2] // false
// [1,2,3,4,5,6,7,8] // true


// let arr1=[4,9,2,5,6,7,1,2];
// let arr2=[1,2,3,4,5,6,7,8];

// function estaOrdenadoMenorAMayor(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(estaOrdenadoMenorAMayor(arr2));
  







// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
// cantidad de filas y columnas y retornar con valores secuenciales numéricos.

// function generarMatriz(fil,col){
//     let mtx=[];
//         for (let i = 0; i <= fil; i++) {
//             mtx[i] = [];
//             for (let j = 1; j <= col; j++) {
//                 mtx[i].push(j + (i * col));
//             }
//         }
//         return mtx
//     }
// let rdo= generarMatriz(5,5)
// console.table(rdo)





//3. Dado él siguiente array de personas
// let personas =
// [
// {
// nombre: "Arlene Barr",
// legajo: 3955,
// edad: 33,
// },
// {
// nombre: "Roslyn Torres",
// legajo: 3925,
// edad: 27,
// },
// {
// nombre: "Cleo Lopez",
// legajo: 1965,
// edad: 34,
// },
// {
// nombre: "Daniel Malone",
// legajo: 3925,
// edad: 30,
// },
// {
// nombre: "Ethel Leon",
// legajo: 1915,
// edad: 34},
// {
//     nombre: "Harding Mitchell",
//     legajo: 1905,
//     edad: 25,
//     }
//     ]


// - Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
// array de personas y realice un ordenamiento de forma ascendente
// - Desarrollar una función llamada orderDescLegajo que reciba por parámetro
// él array de personas y realice un ordenamiento de forma descendente
// - Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
// función


// function orderAscLegajo(arr,tipoOrdenamiento) {
//     let ordenamientoTipo=tipoOrdenamiento.toUpperCase()
//     if(ordenamientoTipo === 'DES'){
//         for (let m = 0; m < arr.length; m++) {
//             for (let i = 0; i < arr.length - 1; i++) {
//               if (arr[i].legajo < arr[i + 1].legajo) {
//                     let aux = arr[i];
//                     arr[i] = arr[i + 1];
//                    arr[i + 1] = aux;
//                   }
//              }
//          }
//         return arr
//     }else if( ordenamientoTipo === 'ASC'){
//         for (let m = 0; m < arr.length; m++) {
//              for (let i = 0; i < arr.length - 1; i++) {
//                   if (arr[i].legajo > arr[i + 1].legajo) {
//                        let aux = arr[i];
//                        arr[i] = arr[i + 1];
//                       arr[i + 1] = aux;
//                      }
//                 }
//             }
//             return arr
            
//         }else{
//             return 'incorrecto'
//         }
//     }

// console.log(orderAscLegajo(personas,prompt('¿QUE TIPO DE ORDENAMIENTO DESEA DE LEGAJOS ?: ¿ASC/DES?'))); 




// 4. Teniendo 3 arrays:
// fila1 = [4,9,2]
// fila2 = [3,5,7]
// fila3 = [8,1,6]




// Realiza las siguientes tareas:


// - Crea una matriz con esta forma:
// Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por
// parámetro y retorne lo solicitado:

// let mtx=[
//         [4,9,2],
//         [3,5,7],
//         [8,1,6]
// ];


// - Función que reciba por parámetro la fila y retornar la suma de la misma.
// function recibematriz(matriz,fila){
//     let acumulador=0;
//     for (let i = fila; i < matriz.length; i++) {       
//             for (let j = 0; j < matriz[i].length; j++) { 
//                 if(matriz[i][j]=== matriz[fila][j]){
//                     acumulador+=matriz[fila][j]
//                 }
          
//     }return acumulador
// }
// }

// let rdo= recibematriz(mtx,2)
// console.log(rdo);





// - Función que retorne en un array la suma de las diagonales [15 , 15], sumando él
// centro las dos veces


// let mtx=[
//     [4,9,2],
//     [3,5,7],
//     [8,1,6]
// ];


//   function sumarDiagonalVerde(matriz) {
//     let suma = 0;
//     let nuevoArr=[];
//     for (let i = 0; i < matriz.length; i++) {
//       for (let j = 0; j < matriz[i].length; j++) {
//         if ((i + j) === matriz.length - 1) {
//           suma += matriz[i][j];
//         }
        
//       }
//     } 
//     nuevoArr.push(suma)
//   let suma2 = 0;
//       for (let k = 0; k < matriz.length; k++) {
//         for (let l = 0; l < matriz[k].length; l++) {
//           if (k === l) {
//             suma2 += matriz[k][l];
//           }
//         }
//       }
//       nuevoArr.push(suma2)
//     return nuevoArr
//   }
  
//   let rdo = sumarDiagonalVerde(mtx);
//   console.log(rdo);

  



// - Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]



// let mtx=[
//     [4,9,2],
//     [3,5,7],
//     [8,1,6]
// ];

// function retornaArr(matriz){
// let arr=[];
//  for (let i = 0; i < matriz.length; i++) {
//       for (let j = 0; j < matriz[i].length; j++) {
//         if ( matriz[i][j] %2===0 ) {
//             arr.push(matriz[i][j])
//             }
//         }
//     }return arr
// }
// let rdo= retornaArr(mtx)
// console.log(rdo)




// - Función que retorne en un array los elementos mayores a 5


// let mtx=[
//         [4,9,2],
//         [3,5,7],
//         [8,1,6]
//     ];
    
//     function retornaArr(matriz){
//     let arr=[];
//      for (let i = 0; i < matriz.length; i++) {
//           for (let j = 0; j < matriz[i].length; j++) {
//             if ( matriz[i][j] >5 ) {
//                 arr.push(matriz[i][j])
//                 }
//             }
//         }return arr
//     }
//     let rdo= retornaArr(mtx)
//     console.log(rdo)

// - Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares


// let mtx=[
//             [4,9,2],
//             [3,5,7],
//             [8,1,6]
//         ];
        
//         function retornaArr(matriz){
// let obj={
//     pares:[],
//     impares:[]
// };
//  for (let i = 0; i < matriz.length; i++) {
//       for (let j = 0; j < matriz[i].length; j++) {
//         if ( matriz[i][j] %2===0 ) {
//             obj.pares.push(matriz[i][j])
//            }
//            if( matriz[i][j] %2 !=0 ){
//             obj.impares.push(matriz[i][j])
//            }
//         }
//       }return obj
// }
// let rdo= retornaArr(mtx)
// console.log(rdo)






