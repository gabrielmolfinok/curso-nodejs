// Base de Datos
let empleados = [
  {
    id: 1,
    nombre: 'Gabriel'
  },
  {
    id: 2,
    nombre: 'Ana'
  },
  {
    id: 3,
    nombre: 'Martina'
  }
];


let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];



// Promesa que obtiene el empleado usando su ID
let getEmpleado = async (id) => {

  let empleadoDB = empleados.find(empleado =>  empleado.id === id);

  if (!empleadoDB) {
    throw new Error(`No existe un empleado con el ID ${id}`);
  } else {
    return empleadoDB;
  }

}


// Promesa que obtiene el salario de un empleado.
// Brindando el objeto del empleado que devuelve la funcion anterior
let getSalario = async (empleado) => {

  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if (!salarioDB) {
    throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
  } else {

    return {
      id: empleado.id,
      nombre: empleado.nombre,
      salario: salarioDB.salario
    };

  }

}


// Funcion que procesa las promesas anteriores
// mediante ASYNC y AWAIT
let getInformacion = async (id) => {

  let empleado = await getEmpleado(id);
  let result = await getSalario(empleado);

  return `${ result.nombre } tiene un salario de ${ result.salario }`;

}


// LLamado de funcion e impresion de resultados
getInformacion(1)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
