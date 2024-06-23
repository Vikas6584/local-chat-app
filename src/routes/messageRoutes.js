const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/rooms/:id/messages', authMiddleware, sendMessage);
router.get('/rooms/:id/messages', authMiddleware, getMessages);

module.exports = router;
