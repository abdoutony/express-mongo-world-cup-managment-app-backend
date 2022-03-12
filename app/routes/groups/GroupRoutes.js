const express = require("express");
const router = express.Router();
const GroupController = require("../../controllers/GroupController");
module.exports = () => {
  router.get("/groups", GroupController.getAllGroups);
  router.post("/groups", GroupController.addNewGroup);
  router.get("/groups/:id", GroupController.findGroupById);
  router.put("/groups/:id", GroupController.updateGroupById);
  router.delete("/groups/:id", GroupController.deleteGroupById);
  return router;
};
