const express = require("express");
router = express.Router();
const {
  createEvent,
  fetchEvents,
  getEventById,
  updateEvent,
} = require("./events.controllers");

router.post("/", createEvent);
router.get("/", fetchEvents);
router.get("/:eventId", getEventById);
router.put("/:eventId", updateEvent);

module.exports = router;
