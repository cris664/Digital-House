function agregarHttp(url) {
    return "http://"+ url;// escribí tu código aquí
}

function procesar(array,callback){
    let aux_arr = []
    for(let i=0;i<array.length;i++)
    {   
     aux_arr[i] = callback(array[i])
    }
    return aux_arr;
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
/* let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ] */