const express = require("express");
const router = express.Router();

const TeamController = require("../../controllers/TeamController");

module.exports = () => {
  router.get("/teams", TeamController.getAllTeams);
  router.post("/teams", TeamController.addNewTeam);
  router.get("/teams/:id", TeamController.findTeamById);
  router.put("/teams/:id", TeamController.updateTeamById);
  router.delete("/teams/:id", TeamController.deleteTeamById);

  return router;
};
