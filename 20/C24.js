let personas = [
    { 
      nombre: "Leonel", 
      apellido: "Pérez", 
      edad: 32, 
      estadoCivil: "casado" 
      },
    { nombre: "Braian", 
      apellido: "Ninni", 
      edad: 27, 
      estadoCivil: "soltero" },
    {
      nombre: "Tomas",
      apellido: "Gonzalez",
      edad: 19,
      estadoCivil: "soltero",
    },
    {
      nombre: "Karol",
      apellido: "Hernández",
      edad: 25,
      estadoCivil: "soltera"
  
    }
  ];
  function ordenarArray(array) {
      for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length-1; j++) {
        if (array[j].apellido > array[j + 1].apellido) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
    return array;
  }
  // console.log(); 
  ordenarArray(personas);
  const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      const guess = list[mid].apellido;
  
      if (guess === item) {
         return list[mid];
      }
      if (guess > item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
  
  }
  
    return null; 
  };
  
  console.log(binarySearch(personas, "Ninni"));
  
  function funcionDeLeo(arreglo,estado){
      let contEstado=0;
      for (let y = 0; y < arreglo.length; y++) {
          if(arreglo[y].estadoCivil===estado){
              contEstado++
          }        
      }
      return contEstado;
  };
  
  console.log(funcionDeLeo(ordenarArray(personas),"soltero"));
  