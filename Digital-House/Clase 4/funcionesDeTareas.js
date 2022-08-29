const fs = require('fs');
let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function(){
        let archivo = fs.readFileSync(this.archivo, 'utf-8');
        let tareas = JSON.parse(archivo);
        return tareas;
    },
    escribirJSON: function (tareas){
        //Convierto el objeto JSON en un string
        let tareasJSON = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo,tareasJSON);
    },
    guardarTarea: function(titulo){
        let tareas = this.leerArchivo();
        let nuevaTarea = {
            titulo: titulo,
            estado:  "pendiente"
        }
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
        return nuevaTarea;
    },
    filtrarPorEstado: function(estado)
    {
       let tareas = this.leerArchivo();
       let tareasFiltrada = tareas.filter(function(tareas){
            return tareas.estado == estado;
        })
        this.listar(tareasFiltrada);
    },
    listar: function(arrayTareas){
        //let arrayTareas = this.leerArchivo();
        arrayTareas.forEach((accion,indice)=>{
            console.log( indice+1 + ". " + arrayTareas[indice].titulo + ' - ' + arrayTareas[indice].estado);
        });
    }
}
module.exports = archivoTareas;