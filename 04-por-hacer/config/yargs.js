

const argv = require('yargs')
              .command('crear', 'Crea una tarea', {
                descripcion: {
                  demand: true,
                  alias: 'd',
                  desc: 'Descripcion de la tarea por hacer'
                }
              })
              .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion: {
                  demand: true,
                  alias: 'd',
                  desc: 'Descripcion de la tarea a actualizar'
                },
                completado: {
                  default: true,
                  alias: 'c',
                  desc: 'Marca como completada o pendiente la tarea'
                }
              })
              .help()
              .argv;


module.exports = {
  argv
}
