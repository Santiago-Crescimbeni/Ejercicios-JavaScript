const prompt = require("prompt-sync")({ sigint: true });



// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length-1])


// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5])


// let str = "un string cualquiera"
// let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])


/* 
1
let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
// console.log(pelicula[3])

function convertirAMayusculas(arrayPeliculas){
    for (let i = 0; i < arrayPeliculas.length; i++) {
        arrayPeliculas[i] = arrayPeliculas[i].toUpperCase();
    }
    return arrayPeliculas;
}
*/
// console.log(convertirAMayusculas(pelicula))





/*

EJERCICIO 6

let listaPeliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function agregarPeliculas(arrayPeliculas1,arrayPeliculas2){
    listaPeliculas2.pop();
    console.log(listaPeliculas2)
    for (let i = 0; i < arrayPeliculas2.length; i++) {
        arrayPeliculas1.push(arrayPeliculas2[i]);
    }

    return convertirAMayusculas(arrayPeliculas1)
}

console.log(agregarPeliculas(pelicula, listaPeliculas2))

/*
EJERCICIO  5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function verificacion(array1,array2){
    for (let i = 0; i < array1.length; i++) {
        let contadorElementosDistinto= [];

        if(array1[i] !== array2[i]){
            contadorElementosDistinto.push(array1[i]);
        }
        if(contadorElementosDistinto.length>0){
            return "Los arrays no son iguales"
        }
    }
}

console.log(verificacion(asiaScores,euroScores))
*/










/*Array inverso
En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.


/*
let array= [8, 10, 6, 9, 10, 6, 6, 8, 4];

function ArrayInvertido(arr){
       return arr.reverse();
};
console.log(ArrayInvertido(array));
*/



/*

1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
aray).
*/

/*
let array= ['hola', '10', 'chau', 'buenas'];
function imprimirInverso(arr){
    for (let i = 0; i < array.length; i++) {
       
          console.log(  arr[i].split('').reverse().join(''));
        
    }       
    
};
imprimirInverso(array);
*/




/*
2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido. */

/*
let array= [8, 10, 6, 9, 10, 6, 6, 8, 4];

function ArrayInvertido(arr){
    let nuevoarr=[];
    let invierte = arr.reverse()
    nuevoarr.push( invierte);
    return nuevoarr;
};

let rdo= ArrayInvertido(array);
console.log(rdo);
*/




/*sumaArray()
En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114
*/

/*
let array=[1,6,3];
function sumaArray(arr){
    let acumulador= 0;
    for (let i = 0; i < arr.length; i++) {
       acumulador+=  arr[i] ;
       
    } return acumulador;
};
let rdo= sumaArray(array);
console.log(rdo);

*/


/*
Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau". */

/*
let array= ['hola', 'diez', 'chau', 'buenas'];
function join (arr){
    for (let i = 0; i < array.length; i++) {
       console.log(arr[i].split(""));        
    }    
};
join (array);
*/