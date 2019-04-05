


## Tareas por hacer


Esta aplicación maneja un listado de tareas por hacer desde con persistencia a DB que en este caso se utiliza un archivo JSON para llevar los registros de las tareas creadas, por hacer y completadas, tambien permite eliminar tareas

Ejecutar este comando al descargar la app

```
npm install
```

Comando para nueva tarea

```
node app crear -d "Nueva Tarea" 
```

Comando para listar todas las tareas

```
node app listar -c false
```

Comando para listar las tareas completadas

```
node app listar -c true
```

Comando para listar todas las tareas

```
node app listar
```

Comando para cerrar una tarea especifica

```
node app cerrar -d "Nueva Tarea"
```

Comando para borrar una tarea especifica

```
node app borrar -d "Nueva Tarea" 
```