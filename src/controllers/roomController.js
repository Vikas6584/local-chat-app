const Room = require('../models/Room');

const createRoom = async (req, res) => {
  try {
    const { name } = req.body;
    const room = await Room.create({ name });
    res.status(201).json({ message: 'Room created successfully!', room });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createRoom };
