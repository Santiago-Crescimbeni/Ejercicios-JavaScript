

//1)

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

// let matrix=[
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]
// ];

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// function recibeMatrizParaSumar(mtx){
//     let acumuladorSuma =0;
//     for (let i = 0; i < mtx.length; i++) {
//         for (let j = 0; j < mtx[i].length; j++) {
//                 acumuladorSuma += mtx[i][j];
            
//         }
       
        
//     } return acumuladorSuma;
// }
// let rdo= recibeMatrizParaSumar(matrix)
// console.log(rdo);
















// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:


// function generarMatriz10por10() {
//     const matrix = [];
//     for (let i = 0; i < 10; i++) {
//       matrix[i] = [];
//       for (let j = 0; j < 10; j++) {
//         matrix[i][j] = (i * 10) + (j + 1);
//       }
//     }
//     return matrix;
//   }
//   let rdo= generarMatriz10por10()














// 3) 


//Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.


// Rojo: 505
// Verde 505
// Trabajar en el mismo sandbox del ejercicio 2.



// Ejercicio 3
// function sumarDiagonalRoja(rdo) {
//     let suma = 0;
//     for (let i = 0; i < rdo.length; i++) {
//       for (let j = 0; j < rdo[i].length; j++) {
//         if (i === j) {
//           suma += rdo[i][j];
//         }
//       }
//     }
//     return suma;
//   }
  
//   const diagonalRoja = sumarDiagonalRoja(rdo);
//   console.log(diagonalRoja);










  
//   function sumarDiagonalVerde(rdo) {
//     let suma = 0;
//     for (let i = 0; i < rdo.length; i++) {
//       for (let j = 0; j < rdo[i].length; j++) {
//         if ((i + j) === rdo.length - 1) {
//           suma += rdo[i][j];
//         }
//       }
//     }
//     return suma;
//   }
  
//   const diagonalVerde = sumarDiagonalVerde(rdo);
//   console.log(diagonalVerde);
  