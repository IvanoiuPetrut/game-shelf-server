const mangoose = require("mongoose");

const gameSchema = new mangoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mangoose.model("Game", gameSchema);
