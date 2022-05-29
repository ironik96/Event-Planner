const express = require("express");
router = express.Router();
const {
  createEvent,
  fetchEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  fetchFullyBookedEvents,
} = require("./events.controllers");

router.get("/fully-booked", fetchFullyBookedEvents);
router.post("/", createEvent);
router.get("/", fetchEvents);
router.get("/:eventId", getEventById);
router.put("/:eventId", updateEvent);
router.delete("/eventId", deleteEvent);

module.exports = router;
