// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// let saludar = nombre => `Hola ${ nombre }`;

// console.log(saludar('Gabriel'));


let persona = {
    nombre: 'Gabriel',
    apellido: 'Molfino',
    edad: '20',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - edad: ${ this.edad }`
    }
};


console.log(persona.getNombre());