const express = require("express");
const router = express.Router();
const PlayerRoutes = require("./players/PlayerRoutes");
const TeamRoutes = require("./teams/TeamRoutes");
const GroupRoutes = require("./groups/GroupRoutes");
const StadiumRoutes = require("./stadiums/StadiumRoutes");
module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Hello World");
  });

  router.use("/", PlayerRoutes(), TeamRoutes(), GroupRoutes(), StadiumRoutes());
  return router;
};
