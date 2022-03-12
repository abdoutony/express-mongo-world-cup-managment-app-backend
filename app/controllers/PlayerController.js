const Player = require("../models/PlayerModel");
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ createdAt: -1 });
    res.status(200).send(players);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findPlayerById = async (req, res) => {
  try {
    const player = await Player.findOne({ _id: req.params.id });
    res.status(200).send(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addNewPlayer = async (req, res) => {
  try {
    console.log(req.body);
    let player = new Player(req.body);
    await player.save();
    res.status(200).send(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updatePlayerById = async (req, res) => {
  try {
    let player = await Player.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(200).send(player);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deletePlayerById = async (req, res) => {
  try {
    await Player.deleteOne({ _id: req.params.id });
    const players = await Player.find().sort({ createdAt: -1 });
    res.status(200).send(players);
  } catch (err) {
    res.status(500).send(err);
  }
};
