const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  coachName: {
    type: String,
    required: true,
  },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
