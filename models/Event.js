const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const eventSchema = new Schema({
  organizer: String,
  name: String,
  email: String,
  image: String,
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = model("Event", eventSchema);
