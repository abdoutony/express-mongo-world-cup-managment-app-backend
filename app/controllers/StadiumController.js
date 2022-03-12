const Stadium = require("../models/StadiumModel");

exports.getAllStadiums = async (req, res) => {
  try {
    let stadiums = await Stadium.find().sort({ _id: -1 });
    res.status(200).send(stadiums);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.addNewStadium = async (req, res) => {
  try {
    let stadium = new Stadium(req.body);
    await stadium.save();
    res.status(200).send(stadium);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.findStadiumById = async (req, res) => {
  try {
    let stadium = await Stadium.findOne({ _id: req.params.id });
    res.status(200).send(stadium);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.updateStadiumById = async (req, res) => {
  try {
    let stadium = await Stadium.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, useFindAndModify: false }
    );
    res.status(200).send(stadium);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteStadiumById = async (req, res) => {
  try {
    await Stadium.deleteOne({ _id: req.params.id });
    res.status(200).send("stadium deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
