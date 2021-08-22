module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      email: String,
      password: String,
      first_name: String,
      last_name: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, first_name, last_name, email, password, ...object } =
      this.toObject();
    object.id = _id;
    object.first_name = first_name;
    object.last_name = last_name;
    object.email = email;
    object.password = password;
    return object;
  });

  const uniqueValidator = require("mongoose-unique-validator");
  schema.plugin(uniqueValidator);

  const user = mongoose.model("User", schema);
  return user;
};
