const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    max: 20,
  },
  age: {
    type: Number,
    required: true,
  },
  shirtNumber: {
    type: Number,
    required: true,
  },
  createdAt:{
      type:Date,
      default:Date.now
  }
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
