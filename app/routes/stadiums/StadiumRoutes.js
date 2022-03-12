const express = require("express");
const router = express.Router();
const StadiumController = require("../../controllers/StadiumController");

module.exports = () => {
  router.get("/stadiums", StadiumController.getAllStadiums);
  router.post("/stadiums", StadiumController.addNewStadium);
  router.get("/stadiums/:id", StadiumController.findStadiumById);
  router.put("/stadiums/:id", StadiumController.updateStadiumById);
  router.delete("/stadiums/:id", StadiumController.deleteStadiumById);
  return router;
};
