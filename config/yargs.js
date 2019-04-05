const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        default: false,
        alias: 'c',
        desc: 'Cuando la tarea se ha completado'
    }
}
const argv = require('yargs')
    .command('listar', 'Listar todas las tareas por hacer')
    .command('crear', 'Crea una tarea para hacer', opts)
    .command('cerrar', 'Cierra una tarea especifica', opts)
    .command('borrar', 'Borra una tarea especifica', opts)
    .help()
    .argv

module.exports = {
    argv
}