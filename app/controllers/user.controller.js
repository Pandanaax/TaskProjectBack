// var db = require("../models/user.model");
// const User = require("../models/user.model");
const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const saltRounds = 10;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.send(err);
    } else {
      const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,
      };

      User.create(newUser, function (err, docs) {
        if (err) {
          res.send(err);
        } else {
          res.send("Le user a bien été crée");
        }
      });
    }
  });
};

exports.login = (req, res) => {
  if (req.body.email) {
    if (req.body.password) {
      User.findOne(
        {
          email: req.body.email,
        },
        function (err, user) {
          if (err) {
            res.send(err + "Une erreur technique est survenue");
          }
          if (!user) {
            res.status(401).json({
              message: "Impossible de se connecter. Mauvais email.",
            });
          } else {
            let password = req.body.password;

            bcrypt.compare(password, user.password, function (err, result) {
              if (result) {
                res.json({
                  token: jwt.sign(
                    {
                      email: user.email,
                    },
                    "Cacher"
                  ),
                });
              } else {
                res.send(err + "Le mot de passe ne correspond pas");
              }
            });
          }
        }
      );
    } else {
      res.send("Aucun mot de passe");
    }
  } else {
    res.send("Aucun mail");
  }
};
