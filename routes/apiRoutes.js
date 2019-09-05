var db = require("../models");

module.exports = function(app) {
  // Get all landmarks
  app.get("/api/landmarks", function(req, res) {
    db.Example.findAll({}).then(function(dbLandmarks) {
      res.json(dbLandmarks);
    });
  });

  app.get("/api/posts/:name", function(req, res) {
    db.Landmark.findOne({
      where: {
        name: req.params.id
      }
    }).then(function(dbLandmark) {
      console.log(dbLandmark);
      res.json(dbLandmark);
    });
  });

  // Create a new example
  app.post("/api/test", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //Update
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Landmark.update({
      name: req.body.name,
      location: req.body.location,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbLandmark) {
      res.json(dbLandmark);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
