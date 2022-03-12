const Player = require("../models/PlayerModel");
const Team = require("../models/TeamModel");
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addNewTeam = async (req, res) => {
  console.log(req.body);

  let team = new Team({
    countryName: req.body.countryName,
    coachName: req.body.coachName,
    players: req.body.players,
  });
  await team.save();
  res.status(200).send(team);
};

exports.findTeamById = async (req, res) => {
  try {
    let team = await Team.find({ _id: req.params.id }).populate("players");
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateTeamById = async (req, res) => {
  try {
    let team = await Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteTeamById = async (req, res) => {
  try {
    await Team.deleteOne({ _id: req.params.id });
    res.status(200).send("Team deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
