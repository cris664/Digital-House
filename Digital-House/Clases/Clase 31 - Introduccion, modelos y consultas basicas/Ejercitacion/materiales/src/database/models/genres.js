module.exports = function(sequelize,DataTypes)
{   
    let alias = "Generos";
    let cols = {
        id: 
        {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        ranking: 
        {
            type: DataTypes.STRING
        },
        active: 
        {
            type: DataTypes.INTERGER
        }
    };
    let config = {
        tableName:"genres",
        timestamps:false
    }
    const Genero = sequelize.define(alias,cols,config);

    return Genero;
}