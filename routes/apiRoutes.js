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

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
