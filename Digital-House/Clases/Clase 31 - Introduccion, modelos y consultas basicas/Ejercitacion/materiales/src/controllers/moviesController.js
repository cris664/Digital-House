
let db = require('../database/models');
const sequelize = db.sequelize;

const moviesController = {
    list: function(req, res) {
        db.Pelicula.findAll()
            .then(movies=>{
                res.render('moviesList.ejs',{movies});
            })
        
    },
    new: function(req, res) {

    },
    recommended: function(req, res) {

    },
    detail: function(req, res) {

    }

};
module.exports = moviesController;