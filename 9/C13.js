const prompt = require("prompt-sync")({ sigint: true });



// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

// function loopDeImpares(num,str){
//     for(i=0;i<=100;i++){
//         console.log(i);
//         if((num+i)%2 === 0){
//             console.log(str +'el numero :' + i + 'es par!');
//         }
//     }return str
// }
// let rdo= loopDeImpares(10,'es impar');
// console.log(rdo)








// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

 
// function loopDeImpares(num,str){
//     for(i=0;i<=100;i++){
//         console.log(i);
//         if((num+i)%2 !== 0){
//             console.log(str +'el numero :' + i);
//         }
//     }return str
// }
// let rdo= loopDeImpares(10,'es impar');
// console.log(rdo)





// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36










// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

/*
function nuevoArray(num){
    let nuevoArreglo=[];

    for(i=0;i<=num; i++){
        nuevoArreglo.push(i)
    }return nuevoArreglo

};
let rdo= nuevoArray(6);
console.log(rdo);*/










// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


// function split(str){
//     let nuevoArray=[];
//     for(i=0;i<str.length;i++){
//         nuevoArray.push(str[i]);
//     }return nuevoArray;
// };
// let rdo= split('hola')
// console.log(rdo)







// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a


// let array1=[6,2,9,4];
// let array2= ['H','O','L','A'];


// function arrayHandler(arr1,arr2){
   
//     for(i=0;i<arr1.length;i++){
//       console.log('Soy el elemento del array 1 ['+ arr1[i] + '] y yo soy el elemento del array 2 [' +  arr2 [i] + ']');
//     }
// }
// arrayHandler(array1,array2);










// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false


// function palindromo(str){
//     let alReves = '';
//     for(let i=str.length-1; i>=0; i--){
//       alReves += str[i];
//     }
//     if(str === alReves) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(palindromo('neuquen'));