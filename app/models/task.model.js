module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      date: Date,
      status: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, title, description, date, status, ...object } =
      this.toObject();
    object.id = _id;
    object.title = title;
    object.description = description;
    object.date = date;
    object.status = status;
    return object;
  });

  const uniqueValidator = require("mongoose-unique-validator");
  schema.plugin(uniqueValidator);

  const task = mongoose.model("Task", schema);
  return task;
};
