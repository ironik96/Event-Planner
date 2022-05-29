const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const eventSchema = new Schema({
  organizer: { type: String, unique: true, maxLength: 20 },
  name: { type: String, pattern: /^((?!event).)*$/ },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  image: { String },
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = model("Event", eventSchema);
