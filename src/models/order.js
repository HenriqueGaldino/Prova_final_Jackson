const database = require('../config/database');

class Order {
    constructor() {
        this.model = database.define('order', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: database.Sequelize.INTEGER,
            },
            product_id: {
                type: database.Sequelize.INTEGER,
            },

        });
    }
}

module.exports = (new Order()).model;