var db = require("../models");

var workoutController =  {};

workoutController.create = function(workout, callback) {
    db.Workout.create(workout)
        .then(function(result) {
            callback(result)
        })
        .catch(function(error) {
            callback({
                result: "error"
            })
        })  
};

workoutController.findAll = function(callback) {
    db.Workout.findAll({})
        .then(function(result) {
            callback(result)
        })
        .catch(function (error) {
            callback({
                result: "error"
            })
        })
};

workoutController.findOne = function(workoutID, callback) {
    db.Workout.findOne({
        where: {
            id: workoutID
        }
    })
        .then(function(result) {
            callback(result)
        })
        .catch(function (error) {
            callback({
                result: "error"
            })
        })
};

module.exports = workoutController;