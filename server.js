const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8080/task",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { user } = require("./app/models/user.model");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to task application." });
});

var myRoutes = require("./app/routes/index")(app);

require("./app/config/db.config")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
