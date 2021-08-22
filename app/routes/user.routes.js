const router = require("express").Router();

const user = require("../controllers/user.controller.js");

router.post("/register", user.register);

router.post("/login", user.login);

// app.use("/api/user", router);

module.exports = router;
