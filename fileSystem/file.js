/**
 * Genera Archivos 
 * @author Abrahamzick Orozco
 */

const fs = require('fs');

let listadoTareas = []

const cargarBD = () => {

    try {
        listadoTareas = require('../database.json')
    } catch (error) {
        listadoTareas = []
    }

}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }

    if (consultarBD(porHacer) < 0) {
        listadoTareas.push(porHacer)
        guardarBD()
        console.log('Registro Nuevo');
    } else {
        console.log('Ya existe una tarea con este nombre');
    }


    return porHacer
}
const getListado = (completado) => {
    cargarBD()
    let lista = []
    if (completado === undefined) {
        lista = listadoTareas
    } else {
        estado = (completado == 'true')
        listadoTareas.forEach(x => {
            if (x.completado == estado) {
                lista.push(x)
            }
        });
    }
    return lista

}
const cerrar = (descripcion, completado = true) => {
    let porHacer = {
        descripcion,
        completado
    }
    let index = consultarBD(porHacer)
    console.log(index);
    if (index >= 0) {
        listadoTareas[index].completado = completado
        guardarBD()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: true
    }
    let index = consultarBD(porHacer)

    if (index >= 0) {
        listadoTareas.splice(index, 1)
        guardarBD()
        return true
    } else {
        return false
    }
}

let guardarBD = () => {

    let data = JSON.stringify(listadoTareas)
    fs.writeFile(`./database.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo guardar la tarea')

        return 'Registro almacenado correctamente'
    });
}

const consultarBD = (data) => {
    cargarBD()
    let index = listadoTareas.findIndex(x => x.descripcion === data.descripcion)
        // console.log('Valor Index: ' + index);
    if (index >= 0) {
        return index
    } else {
        return -1
    }

}



module.exports = {
    crear,
    cerrar,
    getListado,
    borrar
}