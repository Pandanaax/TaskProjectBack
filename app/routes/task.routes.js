const router = require("express").Router();

const task = require("../controllers/task.controller.js");

router.post("/create", task.created);
router.get("/finished", task.finished);

module.exports = router;
