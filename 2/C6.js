const prompt = require("prompt-sync")({ sigint: true });






/* ----------------------------------------------------------LEVEL 1 (CALCULADORA)--------------------------------------- */
 
/*
1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.
5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.
*/
/*
function sumar(n1,n2){
    return n1 + n2;
}
let rdoSuma= sumar(1,2);
console.log(rdoSuma);




function restar(n1,n2){
    return n1 - n2;
}
let rdoResta= restar(1,2);
console.log(rdoResta);




function multiplicar(n1,n2){
    return n1 * n2;
}
let rdoMultiplicacion= multiplicar(1,2);
console.log(rdoMultiplicacion);





function dividir(n1,n2){
    return n1 / n2;
}
let rdoDivision= dividir(1,2);
console.log(rdoDivision);

*/

















/* ----------------------------------------------------------LEVEL 2 (CALCULADORA)--------------------------------------- */

/*Superado el Nivel I, agregamos un poco más de dificultad, probaremos nuestras
funciones. Te recomendamos usar la función prompt() con la que estuvimos
trabajando en la semana para pedirle al usuario que ingrese los números con los que
posteriormente ejecutaremos las funciones de nuestra calculadora. Recordá guardar
esos datos del usuario en diferentes variables.
1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
anterioridad— creá un console.log en el cual vas a poner un string para indicar
que debajo de él comenzarás a probar las funciones, algo así como un
“separador de código”. Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
2. Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados.
3. Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
4. Ejecutar la función que permite dividir pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.

En el punto 5, se nos requiere ejecutar la función dividir, pero si pasamos el cero
como divisor, nos arroja un error. No te preocupes. La idea es familiarizarte con que,
durante toda tu carrera como programador —y durante tu proceso formativo—, vas a
encontrarte con errores. El objetivo es tratar de aprender a lidiar con esa frustración
de una manera lo más productiva posible. ¡No te desanimes! */




/*
function sumar(n1,n2){
    return n1 + n2;
}
let rdoSuma= sumar(parseInt(prompt('Ingrese el Primer Numero Para Sumar :')),parseInt(prompt('Ingrese el Segundo Numero Para Sumar:')));
console.log(rdoSuma);



console.log('-------------- Testeo de Operaciones / Calculadora --------------')


function restar(n1,n2){
    return n1 - n2;
}
let rdoResta= restar(parseInt(prompt('Ingrese el Primer Numero Para Restar:')),parseInt(prompt('Ingrese el Segundo Numero Para Restar:')));
console.log(rdoResta);

console.log('-------------- Testeo de Operaciones / Calculadora --------------')



function multiplicar(n1,n2){
    return n1 * n2;
}
let rdoMultiplicacion= multiplicar(parseInt(prompt('Ingrese el Primer Numero Para Multiplicar :')),parseInt(prompt('Ingrese el Segundo Numero Para Multiplicar :')));
console.log(rdoMultiplicacion);


console.log('-------------- Testeo de Operaciones / Calculadora --------------')



function dividir(n1,n2){
    return n1 / n2;
}
let rdoDivision= dividir(parseInt(prompt('Ingrese el Primer Numero Para Dividir:')),parseInt(prompt('Ingrese el Segundo Numero Para Dividir:')));
console.log(rdoDivision);



console.log('-------------- Testeo de Operaciones / Calculadora --------------')



/*5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.*/

/*
function dividir(n1,n2){
    return n1 / n2;
}
let rdoDivisionEspecifica1= dividir(0,parseInt(prompt('Ingrese el Primer y unico Numero Para dividir por (CERO como Numerador):')));
console.log(rdoDivisionEspecifica1);



console.log('-------------- Testeo de Operaciones / Calculadora --------------')



function dividir(n1,n2){
    return n1 / n2;
}
let rdoDivisionEspecifica2= dividir(parseInt(prompt('Ingrese el Primer y unico Numero Para dividir por (CERO como Denominador):')),0);
console.log(rdoDivisionEspecifica2);



console.log('-------------- Testeo de Operaciones / Calculadora --------------')

*/








/* ----------------------------------------------------------LEVEL 3 (CALCULADORA)--------------------------------------- */



/* Si llegamos hasta aquí, podemos quedarnos tranquilos con lo realizado. A
continuación desarrollaremos funciones extras a nuestra calculadora, en las cuales
utilizaremos las funciones ya creadas. Podemos realizar la prueba de estas luego de
desarrollar cada una.

1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.

3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.

4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
200.*/





// -----------------------------------------  FUNCION PARA ELEVAR AL CUADRADO -----------------------------------------------

/*
function multiplicar(n1,n2){
     return n1 *n2;
    
}

function cuadradoDeUnNumero(num){
 return multiplicar (num,num);
}
let rdoCuadrado = cuadradoDeUnNumero(parseInt(prompt('Ingrese el numero que quiere elevar al cuadrado :  ')));
console.log(rdoCuadrado);*/





//------------------------------------------------------ FUNCION PARA CALCULAR EL PROMEDIO ----------------------------------------------


/*

function sumar(n1,n2,n3){
    return (n1 + n2 + n3) / 3 ;
}


function promedioDeTresNumeros(num1,num2,num3){
    return sumar(num1,num2,num3);
}
let resultadoPromedio= promedioDeTresNumeros(parseInt(prompt('Ingrese Primer Numero :')),parseInt(prompt('Ingrese Segundo Numero :')),parseInt(prompt('Ingrese Tercer Numero :')))
console.log(resultadoPromedio);

*/



//------------------------------------------------------ FUNCION PARA CALCULAR EL PORCENTAJE ----------------------------------------------




/*
function multiplicar(n1,n2){
    return (n1 * n2 );
   
}

function calcularPorcentaje(num,porcentaje){
    return multiplicar(num, porcentaje)/100  ;
}
let resultadoPorcentaje= calcularPorcentaje (parseInt(prompt('Ingrese Numero a calcular: ')), parseInt(prompt('Ingrese Numero de Porcentaje :')));
console.log(resultadoPorcentaje);
*/







//------------------------------------------------------ FUNCION PARA GENERAR EL PORCENTAJE ----------------------------------------------



/*

function dividir(n1,n2){
    return n1 / n2;
}

function GeneradorDePorcentaje(num1,num2){
    return dividir(num1,num2)*100 + ' %';
}
let resultadoGeneradorPorcentaje= GeneradorDePorcentaje(parseInt(prompt('cunto porcentaje es el numero : ')), parseInt(prompt('Del numero : ')));
console.log(resultadoGeneradorPorcentaje);
*/