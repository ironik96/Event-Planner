const express = require("express");
router = express.Router();
const { createEvent, fetchEvents } = require("./events.controllers");

router.post("/", createEvent);
router.get("/", fetchEvents);

module.exports = router;
