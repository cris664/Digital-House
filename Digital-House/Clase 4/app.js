/* const fs = require('fs');
let datosJson = fs.readFileSync(__dirname + "/tareas.json",'utf-8');
//let datosJson = fs.readFileSync("./tareas.json",'utf-8');
let datosConvertidos = JSON.parse(datosJson);
//console.log(datosConvertidos);
let accion = process.argv[2];
switch(accion)
{
    case "listar":
        for(let i = 0;i<datosConvertidos.length;i++)
        {
            console.log(datosConvertidos[i].titulo + ' - ' + datosConvertidos[i].estado);
        }
        break;
    default:
        console.log("No entiendo que quieres hacer")
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion")
        break;
}

 */
const archivo = require('./funcionesDeTareas');
let arrayTareas = archivo.leerArchivo();
let accion = process.argv[2];
switch(accion)
{
    case "listar":
/*         for(let i = 0;i<arrayTareas.length;i++)
        {
            console.log( i+1 + ". " + arrayTareas[i].titulo + ' - ' + arrayTareas[i].estado);
        } */
        archivo.listar(arrayTareas);
        break;
    case "crear":
        let titulo = process.argv[3];
       let nuevaTarea = archivo.guardarTarea(titulo);
        console.log("Nueva tarea creada");
        console.log("----------------")
        console.log(nuevaTarea.titulo + " ---> " +  nuevaTarea.estado);
        break;   
    case "filtrar":
        let estado = process.argv[3];
        archivo.filtrarPorEstado(estado);
        break;
    default:
        console.log("No entiendo que quieres hacer")
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion")
        break;
}