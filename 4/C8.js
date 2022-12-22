const prompt = require("prompt-sync")({ sigint: true });



/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
/*
function recibeValor(num){
    for(i=num;i<num+10;i++){
        console.log(i);
    }
}
let resultado =recibeValor(parseInt(prompt('Ingrese un numero : ')));
console.log(resultado);
*/



/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
/*
for(let i=5;i<=20;i+=3){
    console.log(i);
}
*/




/*3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
*/



/*
let TemporalSumaNumeros=0;
function sumatoria(num){
    
    for(i=0;i<=num;i++){
        TemporalSumaNumeros += i;

    } return TemporalSumaNumeros;
}

let resultado= sumatoria(parseInt(prompt('¿Hasta que numero desea generar su sumatoria consecutiva? Ingrese Numero:  ')));
console.log(resultado);

*/





/*4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
*/












/*
function factorial(num){
    let acumuladorFactorial=1;
    for(i=1;i<=num;i++){
    acumuladorFactorial *=i;
   console.log('Secuencia del generador de factorial =(x1 * x2 * x3 ...) =(X!) = ' + acumuladorFactorial );
    }return acumuladorFactorial;

};
let rdo= factorial(parseInt(prompt('¿sobre Cual Numero desea sacar el Factorial? Ingrese Numero: ')));
console.log('El Factorial de su numero= ' + rdo);

*/






/*5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/

/*
function GeneradorFibonacci(num){
let num1=0;
let  num2=1;
let resultado=0;
for(i=0;i<num;i++){
   resultado = num1 + num2 ;
    num1 =num2;
    num2= resultado;
    console.log(resultado);
   }
};
 GeneradorFibonacci(parseInt(prompt('Ingrese hasta que numero quiere generar la secuencia Fibonacci! : Ingresar Numero:  ')));
*/