const router = require("express").Router();

const task = require("../controllers/task.controller.js");

router.post("/create", task.created);

module.exports = router;
