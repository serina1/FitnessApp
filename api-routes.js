const Fitness = require("./fitnessModel.js");

module.exports = function(app) {
  // get workout

  app.get("/api/workouts", (req, res) => {
    Fitness.find()
      .then(dbfitnessapp => {
        res.json(dbfitnessapp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // createWorkout

  app.post("/api/workouts", (req, res) => {
    Fitness.create({})
      .then(dbfitnessapp => {
        res.json(dbfitnessapp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //updateExercise

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Fitness.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },

      // { new: true, runValidators: true }
    )
      .then(dbfitnessapp => {
        res.json(dbfitnessapp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //getWorkoutsInRange
  app.get("/api/workouts/range", ({ body }, res) => {
    Fitness.find()
      .then(dbfitnessapp => {
        res.json(dbfitnessapp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.delete("/api/workouts", ({ body }, res) => {
    Fitness.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
