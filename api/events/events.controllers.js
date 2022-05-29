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
