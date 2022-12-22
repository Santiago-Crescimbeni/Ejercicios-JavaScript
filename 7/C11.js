const prompt = require("prompt-sync")({ sigint: true });






/*Descripción del problema:
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:

● N.o de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).

Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:

1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias).
*/


/*
la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!
*/












/*
2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
*/
/*
let banco={
    clientes:[
        {
          nroCuenta: 5486273622,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 27771,
          titularCuenta: "Abigael Natte",
        },
        {
          nroCuenta: 1183971869,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 8675,
          titularCuenta: "Ramon Connell",
        },
        {
          nroCuenta: 9582019689,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 27363,
          titularCuenta: "Jarret Lafuente",
        },
        {
          nroCuenta: 1761924656,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 32415,
          titularCuenta: "Ansel Ardley",
        },
        {
          nroCuenta: 7401971607,
          tipoDeCuenta: "Cuenta Unica",
          saldoEnPesos: 18789,
          titularCuenta: "Jacki Shurmer",
        },
      ]
};

*/











/*3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
*/



/*
let banco={
    clientes:[
        {
          nroCuenta: 5486273622,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 27771,
          titularCuenta: "Abigael Natte",
        },
        {
          nroCuenta: 1183971869,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 8675,
          titularCuenta: "Ramon Connell",
        },
        {
          nroCuenta: 9582019689,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 27363,
          titularCuenta: "Jarret Lafuente",
        },
        {
          nroCuenta: 1761924656,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 32415,
          titularCuenta: "Ansel Ardley",
        },
        {
          nroCuenta: 7401971607,
          tipoDeCuenta: "Cuenta Unica",
          saldoEnPesos: 18789,
          titularCuenta: "Jacki Shurmer",
        },
      ],
      consultarCliente: function(titular){ 
            for (let i = 0; i < this.clientes.length; i++) {
                if(titular === this.clientes[i].titularCuenta){
                    return this.clientes[i];
                }
            }
           
      }
      
};


let clienteEncontrado = banco.consultarCliente( prompt(' Clientes Actuales (Abigael Natte ; Ramon Connell; Jarret Lafuente; Ansel Ardley; Jacki Shurmer)----------------------------------------- >Por favor Ingrese nombre de Cliente para solicitar datos : '));
console.log(clienteEncontrado);

*/














/*4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
*/

/*
let banco={
    clientes:[
        {
          nroCuenta: 5486273622,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 27771,
          titularCuenta: "Abigael Natte",
        },
        {
          nroCuenta: 1183971869,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 8675,
          titularCuenta: "Ramon Connell",
        },
        {
          nroCuenta: 9582019689,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 27363,
          titularCuenta: "Jarret Lafuente",
        },
        {
          nroCuenta: 1761924656,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 32415,
          titularCuenta: "Ansel Ardley",
        },
        {
          nroCuenta: 7401971607,
          tipoDeCuenta: "Cuenta Unica",
          saldoEnPesos: 18789,
          titularCuenta: "Jacki Shurmer",
        },
      ],
      consultarCliente: function(titular){ 
            for (let i = 0; i < this.clientes.length; i++) {
                if(titular === this.clientes[i].titularCuenta){
                    return this.clientes[i];
                }
            }           
      },
      depósito: function(titularDeCuenta,cantidadDeDineroADepositar){        
               let dato= this.consultarCliente(titularDeCuenta)
               console.log(dato);
               for (let i = 0; i < this.clientes.length; i++){
                if(titularDeCuenta === this.clientes[i].titularCuenta){
                    let rdoPesosAgg= this.clientes[i].saldoEnPesos + cantidadDeDineroADepositar;
                    console.log( 'Saldo en la Cuenta Antes del Deposito: $' + this.clientes[i].saldoEnPesos);
                    console.log(' Dinero Depositado!!');
                    console.log('Se añaden a la Cuenta la cantidad de : $' + cantidadDeDineroADepositar); 
                    return ' El total de Saldo Actual es de  : $' + (this.clientes[i].saldoEnPesos + cantidadDeDineroADepositar)
                }
               }
            } 
    };

let rdo= banco.depósito(prompt(' Clientes Actuales (Abigael Natte ; Ramon Connell; Jarret Lafuente; Ansel Ardley; Jacki Shurmer)----------------------------------------- >Por favor Ingrese nombre de Cliente para solicitar datos : '), parseInt(prompt('Ingrese La cantidad de Dinero a depositar: ')));
console.log(rdo);

*/







/*
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
impresionados con tu trabajo. 
*/


/*
let banco={
  clientes:[
      {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
      },
      {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
      },
      {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
      },
      {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
      },
      {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
      },
    ],
    consultarCliente: function(titular){ 
          for (let i = 0; i < this.clientes.length; i++) {
              if(titular === this.clientes[i].titularCuenta){
                  return this.clientes[i];
              }
          }           
    },
    deposito: function(titularDeCuenta,cantidadDeDineroADepositar){        
             let dato= this.consultarCliente(titularDeCuenta)
             console.log(dato);
             for (let i = 0; i < this.clientes.length; i++){
              if(titularDeCuenta === this.clientes[i].titularCuenta){
                  let rdoPesosAgg= this.clientes[i].saldoEnPesos + cantidadDeDineroADepositar;
                  console.log( 'Saldo en la Cuenta Antes del Deposito: $' + this.clientes[i].saldoEnPesos);
                  console.log(' Dinero Depositado!!');
                  console.log('Se añaden a la Cuenta la cantidad de : $' + cantidadDeDineroADepositar); 
                  return ' El total de Saldo Actual es de  : $' + (this.clientes[i].saldoEnPesos + cantidadDeDineroADepositar)
              }
             }
          },
      extraccion: function(titularDeLaCuenta,cantidadDeDineroAExtraer){
               
          let persona= this.consultarCliente(titularDeLaCuenta)
          console.log(persona);
          for (let i = 0; i < this.clientes.length; i++){
           if(titularDeLaCuenta === this.clientes[i].titularCuenta && this.clientes[i].saldoEnPesos > 0){
            
               let rdoPesosExtraccion= this.clientes[i].saldoEnPesos - cantidadDeDineroAExtraer;
               console.log( 'Saldo en la Cuenta Antes de la Extraccion: $' + this.clientes[i].saldoEnPesos);
               console.log('Se Extraen de la Cuenta la cantidad de : $' + cantidadDeDineroAExtraer); 
              if((this.clientes[i].saldoEnPesos - cantidadDeDineroAExtraer) < 0){
                  return '(---¡ERROR!---) Fondos Insuficientes, no se puede extrarer esa Cantidad ';
                }else{
                  return  'Dinero Extraido!!, Su Nuevo Saldo es De: $' + (this.clientes[i].saldoEnPesos - cantidadDeDineroAExtraer);
                }
           }
           
          }
       } 
      }; 
  

let rdodeposito= banco.deposito(prompt(' Clientes Actuales (Abigael Natte ; Ramon Connell; Jarret Lafuente; Ansel Ardley; Jacki Shurmer)----------------------------------------- >Ingrese nombre de Cliente : '), parseInt(prompt('Ingrese La cantidad de Dinero a Depositar: ')));
console.log(rdodeposito);

let rdoextraccion= banco.extraccion(prompt(' Clientes Actuales (Abigael Natte ; Ramon Connell; Jarret Lafuente; Ansel Ardley; Jacki Shurmer)----------------------------------------- >Ingrese nombre de Cliente : '), parseInt(prompt('Ingrese La cantidad de Dinero a Extraer: ')));
console.log(rdoextraccion);

let rdoconsultarCliente= banco.consultarCliente(prompt(' Clientes Actuales (Abigael Natte ; Ramon Connell; Jarret Lafuente; Ansel Ardley; Jacki Shurmer)----------------------------------------- >Ingrese nombre de Cliente : '), parseInt(prompt('Ingrese Nombre para consultar ID: ')));
console.log(rdoconsultarCliente);

*/






/*Bonus extra:
Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
eje:

let array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ]
propiedadUnica(array, 'edad') debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array,'nombre') debe retornar [ { nombre: 'Lean'}, { nombre: 'Eze' } ]
*/



/*

function propiedadUnica(nuevoArr,para){ 
   let nuevoArr=[];
      for (let i = 0;i < 5; i++) {
  
       let obj= {nombre: para=prompt('Nombre ?'),
                 edad: num=prompt('Edad ?') };
  
       nuevoArr.push(obj);
  } return nuevoArr;
 }
let rdo= propiedadUnica(nuevoArr);
console.log(rdo);
*/













/*Calculador de notas:
Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */

/*
let alumno={
  nombre: 'santiago',
  numeroDeLegajo:5073,
  listaDeNotas:[2,8,9,10,4,5]
};

function promedio(obj,NotaConsideradaComoAprobacion){
  let resultadoPromedio =0;
  for (let i = 0; i < obj.listaDeNotas.length; i++) {
        resultadoPromedio+= obj.listaDeNotas[i] / obj.listaDeNotas.length;
                
  } 
  if( resultadoPromedio>= NotaConsideradaComoAprobacion){
      return  'Esta Aprobado, tu Nota es : ' + resultadoPromedio + 'La condicion de Aprobacion Segun el Evaluador es: ' + NotaConsideradaComoAprobacion; 
  }else{
      return  'Esta Desaprobado, tu Nota es : ' + resultadoPromedio + 'La condicion de Aprobacion Segun el Evaluador es: ' + NotaConsideradaComoAprobacion; 
  }
};
let rdo= promedio(alumno,parseInt(prompt('Sobre cual nota quiere considerar al alumno a evaluar en condicion de Aprobado')));
console.log(rdo);
*/