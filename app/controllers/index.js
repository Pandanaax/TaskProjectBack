module.exports = (app) => {
  app.controllers = {
    user: require("./user.controller")(app),
  };
};
