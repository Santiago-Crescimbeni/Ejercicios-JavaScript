




// Ejercicio 1
// Dado el siguiente arreglo de objetos:

// let personas = [
//     {
//         nombre : "Raul",
//         edad : 25
//     },
//     {
//         nombre : "Jose",
//         edad : 9
//     },
//     {
//         nombre : "Mina",
//         edad : 7
//     },
//     {
//         nombre : "Lucas",
//         edad : 15
//     },
//     {
//         nombre : "Jorge",
//         edad : 32
//     },
//     {
//         nombre : "Luciano",
//         edad : 26
//     },
//     {
//         nombre : "Lucrecia",
//         edad : 75
//     },
// ]

// Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos cuya edad sea mayor o igual a 26

// function recibeArregro(arr){
//     let nuevoArray=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].edad >=26){
//             nuevoArray.push(arr[i])

//         }
//     }return nuevoArray
// }
// let rdo= recibeArregro(personas)
// console.log(rdo)



// Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un String. Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su edad de forma ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta los siguientes criterios:
// Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
// Si el String es “DESC” o “desc” entonces ordenar de mayor a menor



// let personas = [
//     {
//         nombre : "Raul",
//         edad : 25
//     },
//     {
//         nombre : "Jose",
//         edad : 9
//     },
//     {
//         nombre : "Mina",
//         edad : 7
//     },
//     {
//         nombre : "Lucas",
//         edad : 15
//     },
//     {
//         nombre : "Jorge",
//         edad : 32
//     },
//     {
//         nombre : "Luciano",
//         edad : 26
//     },
//     {
//         nombre : "Lucrecia",
//         edad : 75
//     },
// ]

// function BubbleSort(arr,tipoOrdenamiento) {
//     let enMayuscula=tipoOrdenamiento.toUpperCase()
//     if(enMayuscula === 'DES'){
//         for (let a = 0; a < arr.length; a++) {
//             for (let k = 0; k < arr.length - 1; k++) {
//               if (arr[k].edad < arr[k + 1].edad){
//                     let aux = arr[k];
//                     arr[k] = arr[k + 1];
//                    arr[k + 1] = aux;
//                   }
//              }
//          }
//         return arr
//     }else if( enMayuscula === 'ASC'){
//         for (let a = 0; a < arr.length; a++) {
//              for (let k = 0; k < arr.length - 1; k++) {
//                   if (arr[k].edad > arr[k + 1].edad) {
//                        let aux = arr[k];
//                        arr[k] = arr[k + 1];
//                       arr[k + 1] = aux;
//                      }
//                 }
//             }
//             return arr

//         }else{
//             return 'incorrecto por favor ingrese los valores de ASC  (Ascendente) o DES  (Descendente)!!!';
//         }
//     }

//     console.log(BubbleSort(personas,'asc'))





// Dada la siguiente matriz: 

// let matriz = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]



// Desarrollar una función que retorne la suma de todos los valores de la fila 2.


// function sumaMatriz(mtx){
//     let acumulador= 0;
//     for (let i = 0; i < mtx.length; i++) {
//       for (let j = 0; j < mtx[i].length; j++) {
//             if(mtx[i][j] === mtx[1][j]){
//                     acumulador+=mtx[i][j]

//             }       
//       }        
//     }return acumulador
// }
// let rdo= sumaMatriz(matriz)
// console.log(rdo)


// Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares que se encuentren dentro de la matriz.


// let matriz = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]

// function retornaArray(mtx){
//     let acumulador= [];
//     for (let i = 0; i < mtx.length; i++) {
//       for (let j = 0; j < mtx[i].length; j++) {
//             if(mtx[i][j] %2 === 0){
//                 acumulador.push(mtx[i][j])
                   

//             }       
//       }        
//     }return acumulador
// }
// let rdo= retornaArray(matriz)
// console.log(rdo)


// IMPORTANTE: Realiza el correspondiente llamado a cada una de las funciones para demostrar el correcto funcionamiento de las mismas.

// let rdo= retornaArray(matriz)
// console.log(rdo)




// let personas = [
//     {
//         nombre : "Raul",
//         edad : 25
//     },
//     {
//         nombre : "Jose",
//         edad : 9
//     },
//     {
//         nombre : "Mina",
//         edad : 7
//     },
//     {
//         nombre : "Lucas",
//         edad : 15
//     },
//     {
//         nombre : "Jorge",
//         edad : 32
//     },
//     {
//         nombre : "Luciano",
//         edad : 26
//     },
//     {
//         nombre : "Lucrecia",
//         edad : 75
//     },
// ]


// function retornaNuevoarray(arreglo){
//     let nuevoArreglo=[]; 
//      for(let i=0; i<arreglo.length;i++){
//          if(arreglo[i]>=26){
//              nuevoArreglo.push(arreglo[i])
//          }
 
//      }return nuevoArreglo;
//  }
//  let resultado=retornaNuevoarray(personas)
//  console.log (resultado)


let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]



// function retorneSuma(matrix){
//         let sumaTotal=0;
//    for(let i=0; i<matrix.lenght;i++){
//        for(let j=0; j< matrix[i].lengt; j++){
//             if(matrix[i][j]=== matrix[2][j]){
//               sumaTotal += matrix[i][j]

//             }
//        }
//    }return sumaTotal
// }

// let resultado=retorneSuma(matriz)
// console.log(resultado)


