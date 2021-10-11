const router = require("express").Router();

const task = require("../controllers/task.controller.js");

router.post("/create", task.created);
router.get("/getAll", task.getAll);
router.get("/finished", task.finished);
router.post("/delete", task.delete);

module.exports = router;
