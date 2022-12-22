// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. 
//Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

// let usuarios=[
//     {   nombre: 'pedro',
//         like: 30 },
//     {nombre: 'john',
//     like: 55 },
//     {nombre: 'joha',
//     like: 14 },
//     {nombre: 'lucre',
//     like: 61 },
//     {nombre: 'lucia',
//     like: 38 }
// ]


// function ordenarEdades(array){
//     for(let m = 0; m<array.length; m++){

//         for (let i = 0; i<array.length - 1; i++){
    
//             if(array[i].like > array[i+1].like){  
        
//                 let aux = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = aux;
        
//             }
//         }
//     }
//     return array;
// }
// console.log(ordenarEdades(usuarios))











// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.// 





// let temperatura=[
//     {   dia: 21,
//         mes:1,
//         temperaturaMaxima: 30,
//     temperaturaMinima: 5 },
//     {   dia:23 ,
//         mes:2,
//         temperaturaMaxima: 55,
//         temperaturaMinima: 1 },
//     {   dia:3 ,
//         mes:4,
//         temperaturaMaxima: 14,
//         temperaturaMinima: 2 },
//     {   dia: 13,
//         mes:5,
//         temperaturaMaxima: 61,
//         temperaturaMinima: -5 },
//     {   dia: 10,
//         mes:6,
//         temperaturaMaxima: 23,
//         temperaturaMinima: 7 }
// ]


// function ordenarTemperatura1(array){
//     for(let m = 0; m<array.length; m++){

//         for (let i = 0; i<array.length - 1; i++){
    
//             if(array[i].temperaturaMinima > array[i+1].temperaturaMinima){  
        
//                 let aux = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = aux;
        
//             }
//         }
//     }
//     return array;
// }
// console.table(ordenarTemperatura1(temperatura))




// function ordenarTemperatura2(array){
//     for(let m = 0; m<array.length; m++){

//         for (let i = 0; i<array.length - 1; i++){
    
//             if(array[i].temperaturaMaxima < array[i+1].temperaturaMaxima){  
        
//                 let aux = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = aux;
        
//             }
//         }
//     }
//     return array;
// }
// console.table(ordenarTemperatura2(temperatura))