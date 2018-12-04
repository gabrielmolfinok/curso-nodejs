
class Usuarios {

    constructor() {
        this.personas = []
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala }

        this.personas.push(persona)

        return this.personas

    }

    getPersona(id) {

        let persona = this.personas.filter( persona => persona.id === id )[0]

        return persona

    }

    getPersonas() {
        return this.personas
    }

    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter( persona => persona.sala === sala )
        return personasEnSala

    }

    borrarPersona(id) {

        let personasBorrada = this.getPersona(id)

        // Reemplaza el arreglo original con uno nuevo que NO contiene a la persona
        // con el ID del parametro...
        this.personas = this.personas.filter( persona => persona.id != id )

        return personasBorrada

    }

}

module.exports = { Usuarios }