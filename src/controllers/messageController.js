const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  try {
    const { content, roomId } = req.body;
    const message = await Message.create({ content, userId: req.userId, roomId });
    res.status(201).json({ message: 'Message sent!', message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { roomId } = req.params;
    const messages = await Message.findAll({ where: { roomId } });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { sendMessage, getMessages };
