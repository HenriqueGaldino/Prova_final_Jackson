const database = require('../config/database');
const Order = require('./order');
const Product = require('./product');

class orderProduct {
    constructor() {
        this.model = database.define('orderProduct', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            product_id: {
                type: database.Sequelize.INTEGER,
                
            },
            order_id: {
                type: database.Sequelize.INTEGER,
                
            },

        });
    }
    
}

 

module.exports = (new orderProduct()).model;