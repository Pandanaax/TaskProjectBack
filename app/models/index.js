const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.mongoConnectionString = dbConfig.mongoConnectionString;
db.user = require("./user.model.js")(mongoose);

module.exports = db;
