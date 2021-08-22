const db = require("../models");
const Task = db.task;

exports.created = (req, res) => {
  const task = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    status: req.body.status,
  };

  Task.create(task, function (err, task) {
    if (err) {
      console.log(err);
    } else {
      res.send(task);
    }
  });
};

exports.finished = (req, res) => {
  const task = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    status: req.body.status,
  };
  if (req.body.status) {
    Task.find({ status: "terminé" }, function (err, task) {
      if (err) {
        console.log(err);
      } else {
        res.send(task);
      }
    });
  } else {
    console.log(err + "Pas de task");
  }
};
