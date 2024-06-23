const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize the Express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = socketIo(server);

// Setup Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`Client joined room: ${room}`);
  });

  socket.on('message', (data) => {
    io.to(data.room).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Define the port to listen on
const PORT = process.env.PORT || 3001;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
