var mongoose = require("mongoose");
// const Joi = require("@hapi/joi");

var todoSchema = mongoose.Schema({
    todo: String

  });


var Todo = mongoose.model("Todo", todoSchema);

module.exports.Todo = Todo;

