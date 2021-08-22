var userRoutes = require("./user.routes");
var taskRoutes = require("./task.routes");
module.exports = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/task", taskRoutes);
};
