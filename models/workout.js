module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: function() {
                return Date.now()
            },
        }
    });
    return Workout;
};