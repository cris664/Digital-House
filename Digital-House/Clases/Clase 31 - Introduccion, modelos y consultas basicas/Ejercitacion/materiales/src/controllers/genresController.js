
let db = require('../database/models');

const generesController = {
    list: function(req, res) {
        db.Generos.findAll()
            .then(function(generos){
                res.render('moviesList',{generos:generos});
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