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
  Task.find({ status: "terminé" }, function (err, task) {
    if (err) {
      console.log(err);
    } else {
      res.send(task);
    }
  });
};

exports.getAll = (req, res) => {
  console.log(req.body);
  const task = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    status: req.body.status,
  };
  Task.find(function (err, task) {
    if (err) {
      console.log(err);
    } else {
      res.send(task);
    }
  });
};

exports.delete = (req, res) => {
  console.log("je suis là");
  Task.deleteMany(req.body.id, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("L'élement a bien été supprimé");
    }
  });
};
