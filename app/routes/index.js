const express = require("express");
const router = express.Router();
const PlayerRoutes = require("./players/PlayerRoutes");
module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Hello World");
  });

  router.use("/", PlayerRoutes());
  return router;
};
