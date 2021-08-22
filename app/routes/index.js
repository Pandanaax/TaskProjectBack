var express = require("express");
var router = express.Router();

/* Use user route */
router.use("/users", require("./user.routes"));

module.exports = router;
