descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}
completado = {
    default: false,
    alias: 'c',
    desc: 'Cuando la tarea se ha completado'
}

const argv = require('yargs')
    .command('listar', 'Listar todas las tareas por hacer', { completado })
    .command('crear', 'Crea una tarea para hacer', { descripcion })
    .command('cerrar', 'Cierra una tarea especifica', { descripcion })
    .command('borrar', 'Borra una tarea especifica', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}