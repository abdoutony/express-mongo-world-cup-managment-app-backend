const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  codeGroup: {
    type: String,
    required: true,
  },
  teams: [{ type: mongoose.Types.ObjectId, ref: "Team" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
