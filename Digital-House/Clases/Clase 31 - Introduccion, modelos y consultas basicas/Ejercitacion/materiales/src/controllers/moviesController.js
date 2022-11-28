
let db = require('../database/models');

const moviesController = {
    list: function(req, res) {
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render('moviesList',{peliculas:peliculas});
            })
        
    },
    new: function(req, res) {

    },
    recommended: function(req, res) {

    },
    detail: function(req, res) {

    }

}
module.exports = moviesController;