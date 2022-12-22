// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su triple. 

//  function recibeEntero(num){
//      return num * 3;
//  }
//  let resultado= recibeEntero(3)
//  console.log(resultado);



// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.

// function recibeEnteros(num1, num2){
//     if(num1 !== 0 && num2 !== 0){
//         return num1 / num2
//     }else{
//         return ' Por favor Ingrese numeros que no sean 0(ceros)'
//     }

// }
// let resultadoDiv= recibeEnteros(10,2)
// console.log(resultadoDiv);

// Que reciba por parámetro dos números enteros y si ambos son pares retorne la multiplicación de ambos, de lo contrario que retorne su suma.
// function recibeEnterosPares(num1, num2){
//     if(num1 %2 === 0 && num2 %2 === 0){
//                return num1 * num2
//              }else{
//                  return num1 + num2
//              }
        
//          }
//          let resultadoPares= recibeEnterosPares(11,2)
//          console.log(resultadoPares);








// Realizar una función que nos ayude a determinar si estamos listos para viajar o no. La misma recibirá por parámetro una edad y un booleano que indica si tiene pasaje o no. Se deberá evaluar lo siguiente: 
// Si es mayor de edad y tiene pasaje, entonces retornaremos un mensaje que diga “Puede viajar”
// Si es mayor de edad pero no tiene pasaje, debemos retornar un mensaje que diga “Necesita comprar un pasaje”
// Si es menor de edad y tiene pasaje se deberá retornar “Puede viajar solo con permiso legal”
// Si es menor de edad y no tiene pasaje entonces se deberá retornar “No puede viajar”

// function viaje(edad,booleano){
//     if(edad >= 18 && booleano === true){
//         return 'Puede viajar';
//         }else if(edad >= 18 && booleano === false){  
//             return 'Necesita comprar un pasaje'
//         }else if(edad < 18 && booleano === true){  
//             return 'Puede viajar solo con permiso legal'
//         }else{
//             return 'No puede viajar'
//         }
//     }
// let resultado=viaje(17,true)
// console.log(resultado)


// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las ciudades cuya cantidad de turista por mes sea mayor a 90.000.
// La función deberá retornar un nuevo arreglo con las ciudades que cumplan con la condición antes mencionada.
// Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento.

/*


  let ciudades = [
      {
          nombre : "Mar del Plata",
          mesesDeTurismo : 4,
          cantDeTuristasPorMes : 10000
      },
      {
          nombre : "Medellin",
          mesesDeTurismo : 6,
          cantDeTuristasPorMes : 15000
      },
      {
          nombre : "Rio de Janeiro",
          mesesDeTurismo : 8,
          cantDeTuristasPorMes : 320000
      },
      {
          nombre : "Paris",
          mesesDeTurismo : 12,
          cantDeTuristasPorMes : 12000000
      }
  ]

  function recibeArray(arr){
      let nuevoArray=[];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].cantDeTuristasPorMes > 90000) {
          nuevoArray.push(arr[i].nombre)
        }
        
 }return nuevoArray;

  }
  let resultadoCiudades=recibeArray(ciudades);
  console.log(resultadoCiudades);
*/

