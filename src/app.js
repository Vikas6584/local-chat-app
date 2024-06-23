const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', roomRoutes);
app.use('/api', messageRoutes);

sequelize.sync().then(() => {
  console.log('Database connected and synchronized');
});

module.exports = app;
