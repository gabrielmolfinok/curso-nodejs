/*** Asyn y Await ***/

let getNombre = async () => {
  return new Promise((resolve, reject) => {
    resolve('Gabriel');
  });
}

let saludo = async () => {

  let nombre = await getNombre();

  return `Hola ${nombre}`;
};

saludo().then(msg => {
  console.log(msg);
})
