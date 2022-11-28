module.exports = function(sequelize,DataTypes)
{   
    let alias = "Peliculas";
    let cols = {
        id: 
        {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        length: 
        {
            type: DataTypes.INTERGER
        },
        rating: 
        {
            type: DataTypes.INTERGER
        },
        awards:
        {
            type: DataTypes.STRING
        }

    };
    let config = {
        tableName:"movie",
        timestamps:false
    }
    const Pelicula = sequelize.define(alias,cols,config);

    return Pelicula;
}