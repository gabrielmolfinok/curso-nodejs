let persona = {
    nombre: 'Gabriel',
    apellido: 'Molfino',
    edad: '20',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - edad: ${ this.edad }`
    }
};


// let nombre = persona.nombre;
// let apellido = persona.apellido;

let { nombre: primerNombre, apellido, edad } = persona;

console.log(primerNombre, apellido, edad);