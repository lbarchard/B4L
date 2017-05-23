var express = require('express'); 

var workoutRouter = express.Router(); 

var workoutController = require("../controllers/workout.js")

workoutRouter.get("/workout/:workoutID", function(apiRequest, apiResponse) {
    workoutController.findOne(apiRequest.params.workoutID,
        function callback(controllerResult) {
            apiResponse.send(controllerResult)
        })
});

workoutRouter.get("/workouts", function(apiRequest, apiResponse) {
    workoutController.findAll(
        function callback(controllerResult) {
            apiResponse.send(controllerResult)
        })
});

workoutRouter.post("/workout", function(apiRequest, apiResponse) {
    workoutController.create(apiRequest.body, 
        function callback(controllerResult) {
            apiResponse.send(controllerResult)
        })
})

module.exports = workoutRouter;