const mongoose = require("mongoose");

const StadiumSchema = mongoose.Schema({
  stadiumName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  numberSpectators: {
    type: String,
    required: true,
  },
});

const Stadium = mongoose.model("Stadium", StadiumSchema);
module.exports = Stadium;
