const express = require("express");
router = express.Router();
const {
  createEvent,
  fetchEvents,
  getEventById,
} = require("./events.controllers");

router.post("/", createEvent);
router.get("/", fetchEvents);
router.get("/:eventId", getEventById);

module.exports = router;
