const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prova_jackson', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;