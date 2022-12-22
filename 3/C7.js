const prompt = require("prompt-sync")({ sigint: true });



/*Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?". */


/*
let edad = -21

if(edad < 0) {
console.log("Error, edad inválida. Por favor ingrese un número válido");
} else if (edad === 21){
console.log("Felicitaciones ser mayor y bienvenido");
} else if(edad % 2 !=0){
console.log('Sabias que tu edad es impar?');
} else {
console.log("Puede pasar al bar y tomar alcohol.");
};
*/


































/*
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.





function totalAPagar(vehiculo,litrosConsumidos){
    let precioPorLitroCoches= 86;
    let precioPorLitroMotos= 70;
    let precioPorLitroAutobus= 55;
    if(vehiculo === 'Coche'){
        console.log(' El precio por Litro para COCHES es: $' + precioPorLitroCoches)
    }else if(vehiculo === 'Moto'){
        console.log('El precio por Litro para MOTOS es: $' + precioPorLitroMotos);
    }else if(vehiculo === 'Autobus'){
        console.log('El precio por Litro para Autobus es: $' + precioPorLitroAutobus);
    }else{
        console.log('****************   Considere introducir entre las opciones de vehiulos: Coche; Moto o Autobus ****************  ')
    }
    if((litrosConsumidos >=0 && litrosConsumidos<=25) && vehiculo === 'Coche'||vehiculo === 'Moto'||vehiculo === 'Autobus'){
        console.log('Se han de añadir $50 al total a pagar');
    }else if( litrosConsumidos> 25){
        console.log('Se han de añadir $25 al total a pagar');
    }else{
        console.log(' ****************            No es posible calcular el monto a añadir => siga los pasos indicados arriba           ****************');
    };
}
totalAPagar(prompt('Indicar medio de transporte :'), parseInt(prompt('¿Cuantos litros fueron consumidos por el cliente :?')));

*/










































/*Local de sándwiches
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)



● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente. */



/*
//------------- TIPOS DE SANDWICH --------------
let Pollo= 150;
let Carne = 200;
let Vegetariano= 100;
const NingunaSeleccion =0;
//------------ TIPO DE PAN ---------------------

 let Blanco = 50;
 let Negro = 60;
 let SinGluten= 75;
 
//------------ ADICIONALES ---------------------
    let Queso = false;
    let Tomate = false;
    let Lechuga = false;
    let Cebolla =false;
    let Mayonesa = false;
    let Mostaza = false;



let AcumuladorDeCosto = 0;

function ventaDeSandwiches (TipoDeSandwich,TipoDePan,Queso,Tomate,Lechuga,Cebolla,Mayonesa,Mostaza){
    if(TipoDeSandwich === 'Pollo' ){
        console.log('Tipo de sandwich de pollo tiene un valor de : $' + Pollo);
        AcumuladorDeCosto += Pollo;
    } else if(TipoDeSandwich === 'Carne'){
        console.log('Tipo de sandwich de Carne tiene un valor de : $' + Carne);
        AcumuladorDeCosto += Carne;
    }else if(TipoDeSandwich === 'Vegetariano'){
        console.log('Tipo de sandwich de Vegetariano tiene un valor de : $' + Vegetariano);
        AcumuladorDeCosto += Vegetariano;
    }else {
        console.log(' No reconocido! Introduzca nuevamente el timpo de Sandwich: Pollo, Carne o Vegetariano ');
    }

    if(TipoDePan === 'Blanco'){
        console.log(' El costo del Pan Blanco es de : $' + Blanco);
        AcumuladorDeCosto += Blanco;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);
        
    }else if(TipoDePan === 'Negro'){
        console.log(' El costo del Pan Negro es de : $' + Negro);
        AcumuladorDeCosto += Negro;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);
    }else if(TipoDePan === 'SinGluten'){
        console.log(' El costo del Pan SinGluten es de : $' + SinGluten);
        AcumuladorDeCosto += SinGluten;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);
    }else{
        console.log(' No existe ninguna seleccion : $' +  NingunaSeleccion);
    }
     
    
    if(Queso=== true){
        console.log('El costo del Adicional del queso es de : $20' )
        AcumuladorDeCosto += 20;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);
    }else{
        false +'No Agregar Adicional';
    }
    if(Tomate=== true){
        console.log('El costo del Adicional es de : $15')
        AcumuladorDeCosto += 15;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);
    }else{
        false +'No Agregar Adicional';
    }
    if(Lechuga=== true){
        console.log('El costo del Adicional es de : $10')
        AcumuladorDeCosto += 10;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);         
    }else{
        false +'No Agregar Adicional';
    }
    if(Cebolla=== true){
        console.log('El costo del Adicional es de : $15' )
        AcumuladorDeCosto += 15;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);       
    }else{
        false +'No Agregar Adicional';
    }
    if(Mayonesa=== true){
        console.log('El costo del Adicional es de : $5'  )
        AcumuladorDeCosto += 5;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto); 
        
    }else{
        false +'No Agregar Adicional';
    }
    if(Mostaza=== true){
        console.log('El costo del Adicional es de : $5')
        AcumuladorDeCosto += 5;
        console.log(' Total Hasta el momento es de : $' + AcumuladorDeCosto);        
    }else{
        false +'No Agregar Adicional';
    }
   
};

 ventaDeSandwiches(prompt('Entre (Pollo - Carne - Vegetariano - Ninguno) ¿Que Tipo de Sandwich pedira :?'), prompt('Entre (Blanco - Negro - SinGluten - Ningunco) ¿Que Tipo de Pan pedira :?'), Boolean(prompt('Le gustaria añadir Queso ($20)? (true/false)')),Boolean(prompt('Le gustaria añadir Tomate ($15)? (true/false)')),Boolean(prompt('Le gustaria añadir Lechuga ($10)? (true/false)')),Boolean(prompt('Le gustaria añadir Cebolla ($15)? (true/false)')),Boolean(prompt('Le gustaria añadir Mayonesa ($5)? (true/false)')),Boolean(prompt('Le gustaria añadir Mostaza ($5)? (true/false)')));
 console.log(AcumuladorDeCosto);
 */







































/*Extra bonus
Si llegaste hasta acá, estás más que bien. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
proponemos este otro ejercicio. Tené en cuenta que a partir de acá los ejercicios
pueden escalar en dificultad. Como decimos siempre, paciencia, ignorá la complejidad
y tratá de resolverlo con las herramientas que tengas a tu disposición. También podés
buscar información extra en Google o documentaciones que conozcas.

¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/

/*
function recibe(num){
    let AleatorioSecreto= Math.floor(Math.random() *10 + 1);
    if(num === AleatorioSecreto){
        console.log(' FELICITACIONES ACERTASTE !!!!!! ');
        console.log('Numero elegido = ' + num);
        console.log('Numero Alteatorio = '+ AleatorioSecreto);
    }else{
        console.log('Sige intentando');
        console.log('Numero elegido = ' + num);
        console.log('Numero AlteatorioSecreto = '+ AleatorioSecreto);
    }
};
recibe(parseInt(prompt('Elija su posible coincidencia Numero :')));
*/
















































/*
abrirParacaidas()
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m. */

/*
function abrirParacaidas(velocidad,altura){
    if(velocidad <= 1000){
          if(altura >=2000 && altura <= 3000){
            console.log('Abrir Paracaidas Ya!!!');
          }else{
        console.log('Esperar a la Orden !!!');
    } 
    }
  
}
abrirParacaidas(parseInt(prompt(' Cual es tu Velocidad?')), parseInt(prompt('Cual es tu Altura?')));
*/






























/*Estructura switch
En estos ejercicios utilizaremos variables que contengan los valores para simular el
ingreso de data de un usuario. Es decir, una variable stringUno que contenga —por
ejemplo— el valor “perro”, que sería lo que el usuario “ingresa” como valor en nuestro
programa.
Traductor condicional
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/

/*
function Traductor(palabra){
    switch(palabra){
        case "casa": 
        console.log('La palabra en ingles es = House');
            break;
        case "perro":
            console.log(' La palabra en ingles es = Dog'); 
            break;
        case "pelota": 
        console.log('La palabra en ingles es = Ball');
            break;
         case "árbol":
            console.log('La palabra en ingles es = Tree');
            break;
          case"genio": 
          console.log('La palabra en ingles es = Genius');
            break;
        default:
            console.log('La palabra ingresada es incorrecta');
    }
}
Traductor(prompt('Ingrese la palabra a traducir : '));
*/













































/*
Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".


En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita. */



/*
function Traductor(valoración){
    switch(valoración){
        case "Muy buena": 
        console.log("Calificaste la película como Muy buena Me alegro mucho.");
        console.log('Agradecemos tu visita');
            break;
        case "Buena": 
        console.log("Calificaste la película como buena Me alegro mucho.");
        console.log('Agradecemos tu visita');
            break;
        case "Mala": 
          console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
          console.log('Agradecemos tu visita');
            break;
        case "Muy mala":
          console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
          console.log('Agradecemos tu visita');
                break;
        case "Mediocre": 
          console.log("Calificaste la película como Mediocre Lo lamentamos mucho.");
          console.log('Agradecemos tu visita');
                break;
        default:
          console.log("Ingresaste un valor inválido");
          
    }
}
Traductor(prompt('Ingrese la Valoracion (Muy buena, Buena, Mala, Muy mala o Mediocre) : '));

*/






