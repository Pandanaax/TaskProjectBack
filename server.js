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
const { user } = require("./app/models");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to task application." });
});

var myControllers = require("./app/controllers/user.controller");
var myRoutes = require("./app/routes/user.routes")(app);

app.use("/api", myRoutes);
// app.use("/user", myControllers);
require("./app/config/db.config")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
