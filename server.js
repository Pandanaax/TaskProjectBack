const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
const { user } = require("./app/models/user.model");
// const { task } = require("./app/models/task.model");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to task application." });
});

// require("./app/controllers/index")(app);
var myRoutes = require("./app/routes/index")(app);

// app.use("/api", myRoutes);
require("./app/config/db.config")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
