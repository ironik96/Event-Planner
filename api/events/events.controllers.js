const Event = require("../../models/Event");

exports.createEvent = async (req, res) => {
  console.log("createEvent");
  try {
    const response = await Event.create({ ...req.body });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.fetchEvents = async (req, res) => {
  console.log("fetchEvents");
  try {
    const response = await Event.find();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getEventById = async (req, res) => {
  console.log("getEventById");
  const { eventId } = req.params;
  try {
    const response = await Event.findById(eventId).exec();
    if (response) res.status(201).json(response);
    else res.status(404).json({ message: "Event not found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.updateEvent = async (req, res) => {
  console.log("updateEvent");
  const { eventId } = req.params;
  const updates = req.body;
  try {
    const response = await Event.findById(eventId).exec();
    if (response) {
      await Event.findByIdAndUpdate(eventId, updates);
      res.status(204).end();
    } else res.status(404).json({ message: "Event not found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.deleteEvent = async (req, res) => {
  console.log("deleteEvent");
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    if (event) {
      await Event.deleteOne({ _id: eventId });
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.fetchFullyBookedEvents = async (req, res) => {
  console.log("fetchFullyBookedEvents");
  try {
    const events = await Event.find().exec();
    res
      .status(201)
      .json(events.filter((event) => event.numOfSeats === event.bookedSeats));
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
