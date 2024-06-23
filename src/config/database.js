const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'local-chat-app.sqlite',
});

module.exports = sequelize;
