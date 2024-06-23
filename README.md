# Local Chat App

A local chat application that allows multiple users on the same device to communicate in different chat rooms. The backend handles user authentication, message storage, and room management.

## Features

- Multi-room chat capabilities with user-specific access.
- Real-time messaging within the local network.
- User registration and login with hashed passwords.
- Persistent message storage with the ability to retrieve history on login.

## Technologies Used

- Node.js
- Express
- SQLite
- Sequelize
- Socket.io
- Electron

## Folder Structure


local-chat-app/
├── src/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── roomController.js
│ │ └── messageController.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Room.js
│ │ └── Message.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── roomRoutes.js
│ │ └── messageRoutes.js
│ ├── config/
│ │ └── database.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── app.js
│ └── server.js
├── main.js
├── preload.js
├── package.json
├── package-lock.json
└── README.md



## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)
- SQLite

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/local-chat-app.git
    cd local-chat-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    - SQLite will be used as the database. Make sure you have SQLite installed.

4. **Start the server:**
    ```sh
    npm start
    ```

5. **Run the Electron application:**
    ```sh
    npx electron .
    ```

## Usage

1. **Start the backend server:**
    ```sh
    npm start
    ```
    This will start the backend server on port 3001.

2. **Run the Electron application:**
    ```sh
    npx electron .
    ```
    This will open the Electron application window.

3. **Interact with the application:**
    - Register a new user.
    - Create or join chat rooms.
    - Start chatting!

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)

