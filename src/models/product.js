const database = require('../config/database');

class product {
    constructor() {
        this.model = database.define('product', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
            },
            price: {
                type: database.Sequelize.FLOAT,
            },
            category_id: {
                type: database.Sequelize.INTEGER,
            },

        });
    }
}

module.exports = (new product()).model;