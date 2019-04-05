const args = require('./config/yargs').argv
const porHacer = require('./fileSystem/file')
const colors = require('colors');

let key = args._[0]

switch (key) {
    case 'crear':
        porHacer.crear(args.descripcion, args.completado)
            // console.log('Crear Tarea - ' + args.d);
        break;

    case 'listar':
        let lista = porHacer.getListado()
            // console.log(lista);
        lista.forEach(tarea => {
            console.log('====================='.yellow);
            console.log(colors.green(tarea.descripcion));
            console.log(`Estado: ${tarea.completado}`.blue);
        });
        console.log('====================='.yellow);
        break;

    case 'cerrar':
        console.log(porHacer.cerrar(args.descripcion))

        break;

    case 'borrar':

        console.log(porHacer.borrar(args.descripcion))

        break;

    default:
        console.log('Esta función no existe');
}