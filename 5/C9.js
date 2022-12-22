const prompt = require("prompt-sync")({ sigint: true });

//EJERCICIOS clase 
//9A**************************************************************************************************

/*1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().*/

/*
function ingresaUsuario(frase){
        return frase;
};
let resultado = ingresaUsuario(prompt(' Ingresar Frase : '));
console.log(resultado);
*/









/*
2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".
*/

/*
function preguntaAUsuario(nombre){
    return 'Hola ' + nombre ;
}

let resultado = preguntaAUsuario(prompt(' Ingresar Nombre para Generarun saludo : '));
console.log(resultado);
*/










/*
3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
*/

/*
function ingresaNumero(num,num2){
    return num + num2;

};

let resultado= ingresaNumero(parseInt(prompt(' Por favor Ingrese Primer Numero para Sumar: ')), parseInt(prompt('Por favor Ingrese Segundo Numero para Sumar: ')));
console.log('El Resultado de la Suma es : ' + resultado);

*/






/*4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
*/

/*
function pedirAnioNacimiento(anio){
        return 2022 - anio;
};
let resultado= pedirAnioNacimiento(parseInt(prompt(' Ingrese Año de nacimiento: ')));
console.log('Udsted Tiene ' + resultado + ' años !');
*/





/*5) Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"
*/



/*

function numeroAleatorio(num){
    let Random= Math.floor ( Math.random() * 10 + 1);
    if(num === Random){
        console.log('Numero Aleatorio = ' + Random);
        console.log(' Tu Numero Elegido es: ' + num);
        console.log('Felicitaciones, ese era! !!');
    } else{
        console.log('Numero Aleatorio = ' + Random);
        console.log(' Tu Numero Elegido es: ' + num);
        console.log('Lo siento, intenta Nuevamente! !!');
    }; 
};
numeroAleatorio(parseInt(prompt('Ingrese Numero a eleccion entre el 1 al 10: ')));

*/






/*6) Escribí un programa que imprima los números pares del 0 al
100.
*/

/*
function imprimirPares(num){
    for(i=0;i<=num;i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}; 
imprimirPares(parseInt(prompt('¿Hasta que numero desea Imprimir los Pares ? :')));
*/






/*7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];*/

/*
const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];
function  IteraSobreArreglo (arr){
        for(i=0;i<arr.length;i++){
            console.log(arr[i]);
        };
};
IteraSobreArreglo(nombres);
*/






/*8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
*/


/*
function pseudocódigo( num){
    if(num > 500){
      return  'El 18% del numero ingresado es :' + (num * 18) /100;
    }else{
        return  'El Numero Ingresado es: ' + num + ' Si ingresa un Numero Mayor a 500 se Calculara el 18% del Mismo'
    }
}

let resultado = pseudocódigo(parseInt(prompt('Imgrese Un Numero Aleatorio :')));
console.log(resultado);

*/





/*9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
*/




/*
//____________________ ARRAY CON MAS DE TRES POSICIONES ___________________

let array= ['perro', 16, true, 'hola'];


//____________________ ARRAY CON MENOS DE TRES POSICIONES ___________________
let array2= ['perro', 16, true];


function elemento (arr){
       if(arr[3]){
            return arr[3];
        } else {
            return -1;
        }   
    
};
let resultado = elemento(array2);
console.log(resultado);
*/















/*10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
*/


/*
function ingresaNumeroDosCifras(num){
    if(num < 10){
        return 'El minimo de numeros que falta para que sean  2 cifras :  ' + (10 - num);        

    }else {
        return 'El minimo de numeros que falta para que sean 3 cifras es:  ' + (100 - num);
    };
};
    let resultado =ingresaNumeroDosCifras(parseInt(prompt('Ingrese Primer Numero: ')));
    console.log(resultado);
*/








/*11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
*/

/*
function CalculaPromedio(num1,num2,num3){
    return (num1 + num2 + num3)/3;

};
let rdo= CalculaPromedio(parseInt(prompt('Ingrese Primer Numero para calcular promedio: ')),parseInt(prompt('Ingrese Segundo Numero para calcular promedio: ')),parseInt(prompt('Ingrese Tercer Numero para calcular promedio :')));
console.log(rdo);/*










/*12) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/

/*
function sumatoria(){
    let num = parseInt(prompt("Ingrese un numero limite para la suma: "));
    let sumatoria = 0;
    for(let i=0 ; i<=num ; i++){
    sumatoria += i;
    }
    return sumatoria;
    }
    let resultadoFinal = sumatoria();
    console.log("El resultado de la sumatoria es: " +
    resultadoFinal);
*/
