
let db = require('../database/models');
const sequelize = db.sequelize;

const generesController = {
    list: function(req, res) {
        db.Genre.findAll()
            .then(genres=>{
                res.render('genresList.ejs',{genres});
            })
        
    },
    new: function(req, res) {

    },
    recommended: function(req, res) {

    },
    detail: function(req, res) {

    }

}
module.exports = generesController;