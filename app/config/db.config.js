const mongoose = require("mongoose");
module.exports = (app) => {
  mongoose.connect(
    "mongodb://localhost:27017/task",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connexion à la base réussi");
      }
    }
  );
};
