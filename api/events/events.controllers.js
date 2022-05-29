const Event = require("../../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const response = await Event.create({ ...req.body });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.fetchEvents = async (req, res) => {
  try {
    const response = await Event.find();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getEventById = async (req, res) => {
  const { eventId } = req.params;
  try {
    const response = await Event.findById(eventId).exec();
    if (response) res.status(201).json(response);
    else res.status(404).json({ message: "Account not found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
