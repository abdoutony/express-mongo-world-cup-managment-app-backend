const Group = require("../models/GroupModel");
const Team = require("../models/TeamModel");

exports.getAllGroups = async (req, res) => {
  try {
    let groups = await Group.find().sort({ _id: -1 });
    res.status(200).send(groups);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.addNewGroup = async (req, res) => {
  try {
    let group = new Group(req.body);
    await group.save();
    res.status(200).send(group);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.findGroupById = async (req, res) => {
  try {
    let group = await Group.findOne({ _id: req.params.id }).populate("teams");
    res.status(200).send(group);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.updateGroupById = async (req, res) => {
  try {
    let group = await Group.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).send(group);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteGroupById = async (req, res) => {
  try {
    await Group.deleteOne({ _id: req.params.id });
    res.status(200).send("Group deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};
