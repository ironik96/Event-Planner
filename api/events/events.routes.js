const express = require("express");
router = express.Router();
const { createEvent } = require("./events.controllers");

router.post("/", createEvent);

module.exports = router;
