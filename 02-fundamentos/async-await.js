/*** Asyn y Await ***/

// Todo esto...
let getNombre = async () => {
  return new Promise((resolve, reject) => {
    resolve('Gabriel');
  });
}

// Se resume en esto...
let saludo = async () => {

  let nombre = await getNombre();

  return `Hola ${nombre}`;
};

saludo().then(msg => {
  console.log(msg);
})
