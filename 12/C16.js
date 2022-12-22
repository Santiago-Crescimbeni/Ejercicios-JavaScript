// /**
//  * Escriba una función que reciba dos parámetros:
//  * una array y un índice. La función mostrar por consola
//  * el valor del elemento en la posición dada
//  * (basado en uno). Por ejemplo, dado el siguiente
//  * array:
//  */
//  let array = [
//     3,
//     6,
//     67,
//     6,
//     23,
//     11,
//     100,
//     8,
//     93,
//     0,
//     17,
//     24,
//     7,
//     1,
//     33,
//     45,
//     28,
//     33,
//     23,
//     12,
//     99,
//     100
//   ];
  
//   /**
//    * Y el siguiente indice:
//    */
  
//   let indice = 10;
  
//   /**
//    * La funcion debera mostrar por consola el numero 6.
//    */
  
  // Extra: que pasa si cambias el valor de la variable indice a 10?
  // Si tu función esta bien, deberias ver el numero 17 por consola.
  
  // Escribe tu función debajo de esta linea.
  
//   function alg(arr, indice) {
//     for (let i = indice; i < arr.length; i++) {
//       return arr[i];
//     }
//   }
  
 // Invoca tu función debajo de esta linea.
//   let resultado = alg(array, indice);
//   console.log(resultado);
  





































/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */
// Escribe tu función aquí:
// function diasDelMes(numeroMes) {
//     if (numeroMes < 1 || numeroMes > 12) {
//       return "numero invalido";
//     } else if (numeroMes === 2) {
//       return 28;
//     } else if (
//       numeroMes === 4 ||
//       numeroMes === 6 ||
//       numeroMes === 8 ||
//       numeroMes === 11
//     ) {
//       return 30;
//     } else {
//       return 31;
//     }
//   }
    
  // E invocala:
//   console.log(diasDelMes(14));
  // Por ahora, la función retorna 0.
  // Modifica el codigo para que retorne
  // los datos correctos.



































  /**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
  





























// console.log("Hola mundo!");

// function mayorDe2(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(mayorDe2(15, 64));

// function mayorDe3(a, b, c) {
//   return mayorDe2(mayorDe2(a, b), c);
// }

 //mayorDe3(85,215,47)

// function mayorDe4(a, b, c, d) {
  //return mayorDe2(mayorDe3(a,b,c),d)
//   return mayorDe2(mayorDe2(a, b), mayorDe2(c, d));
  // c
// }

// mayorDe4(15, 25, 68, 41);

// function encontrarMayor(a, b, c, d) {
//   return Math.max(a, b, c, d);
// }

// function encontrarMayorEnArray(array) {
//   let mayor = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > mayor) {
//       mayor = array[i];
     // 56
//     }
//   }

//   return mayor;
// }

// let arreglito = [15, 48, 56, 32, 14, 85, 9];

// function encontrarMayorEnArrayConMath(array) {
//   let mayor = array[0];
//   for (let i = 1; i < array.length; i++) {
//     mayor = Math.max(array[i], mayor);
//   }
//   return mayor;
// }


























/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 *
 */
//  let array = [
//     3,
//     6,
//     67,
//     6,
//     23,
//     11,
//     100,
//     8,
//     93,
//     0,
//     17,
//     24,
//     7,
//     1,
//     33,
//     45,
//     28,
//     33,
//     23,
//     12,
//     99,
//     100
//   ];
//   function repetidos(arreglo) {
//     let descarte = [];
//     let repiten = [];
//     let num = 0;
//     for (let i = 0; i <= arreglo.length; i++) {
//       num = arreglo[i];
//       for (let li = 0; li <= arreglo.length; li++) {
//         if (arreglo[li] === num) {
//           if (descarte.includes(num) === false) {
//             descarte.push(num);
//           } else if (repiten.includes(num) === false) {
//             repiten.push(num);
//           }
//         }
//       }
//     }
//     return repiten.join();
//   }
  
//   console.log(repetidos(array));
  





























/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

//  let numeros = 12345;
//  function invertirNumero(x) {
//    x = String(x);
//    let nuevoNumero = "";
//    for (let i = x.length - 1; i >= 0; i--) {
//      nuevoNumero += x[i];
//    }
//    return Number(nuevoNumero);
//  }
//  console.log(invertirNumero(numeros));