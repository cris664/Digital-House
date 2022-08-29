const moviesDH = require('./movies');

moviesDH.forEach(function(elemento){
console.log(elemento);
});

function searchMovies(titulo){
    return moviesDH.find(movie => movie.title == titulo);
};
console.log(searchMovies('REC'));


function searchMovieByGenre(genero){
    return moviesDH.filter(movie => movie.genre == genero);
}
console.log(searchMovieByGenre('Comedia'))    

let precioTotal = moviesDH.reduce(function(acumulador,movies){ 
    return acumulador + movies.price}, 0);
console.log(precioTotal);

function changeMovieGenre(id,genero){
    let cambio = moviesDH.searchMovies(id);
    cambio.genre=genero;
}
