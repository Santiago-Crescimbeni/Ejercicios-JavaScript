const prompt = require("prompt-sync")({ sigint: true });






/*1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/
/*
function convertir(pulgadas){
   return pulgadas * 2,54;

};

let resultado= convertir(7);
console.log(resultado);

*/



/*
function convierte(num_pulgada){
 return num_pulgada * 2.5; 
}
let resultado = convierte(5)
console.log(resultado);
*/




/*
2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com” */
/*
function string(nombre){
    return  'http://www.' + nombre + '.com'

};

let resultado= string('yoha');
console.log(resultado);
*/


/*
function recibe (string){
    return 'www.' + string + '.com' ;
}
let resultado = recibe('pepito');
console.log (resultado);*/



/*
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
*/


/*
function string (frase){
    return frase + '!';
};

let stringA=string ('hola mundo') ;
console.log(stringA);
*/



/*
function recibe2(str){
return str +'!';
}
let resultado2= recibe2('hola mundo');
console.log (resultado2);


*/



/*
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.


function calculaEdad(edad){

    return edad * 7 ;
    }
    let resultado3= calculaEdad(2);
    console.log (resultado3);


*/

/*
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.


function calcularSueldo(sueldoMensual){
return sueldoMensual / 40; 
} 
let resultad4= calcularSueldo(5000);
console.log(resultad4);
*/


/*

6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.

function calculadorIMC(alt,peso){
    let calculo= peso/ (alt*alt);
    return calculo ;

}
let altura =parseInt(prompt('ingrese altura'));
let peso = parseInt(prompt('ingrese peso') );

let resultad5=calculadorIMC(altura,peso);
console.log (resultad5);*/

/*7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()


function  recibe(str){
    return str.toUpperCase();
}
let resultado= recibe('hola mundo');
console.log(resultado);
*/

/*
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.



function recibe(num){
    return typeof(num);
}
let resultado= recibe(false);
console.log(resultado);
*/


/*
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

function recibeRadio(radio){
    return  2 * Math.PI * radio;
}
let resdo= recibeRadio(2);
console.log(resdo);
 */


/*
function arrow

let recibeRadio = (radio) => 2 * Math.PI * radio;
let resdo= recibeRadio(2);
console.log(resdo);
*/