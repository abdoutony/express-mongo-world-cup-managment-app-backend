const express = require("express");
const router = express.Router();
const PlayerController = require("../../controllers/PlayerController");
module.exports = () => {
  router.get("/players", PlayerController.getAllPlayers);
  router.post("/players", PlayerController.addNewPlayer);
  router.get("/players/:id", PlayerController.findPlayerById);
  router.put("/players/:id", PlayerController.updatePlayerById);
  router.delete("/players/:id", PlayerController.deletePlayerById);
  return router;
};
