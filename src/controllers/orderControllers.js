const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const order = require("../models/order");

class OrderController {
  async createOrder(user_id, product_id) {
    if (user_id === undefined || product_id === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newOrder = await order.create({
      user_id,
      product_id,
    });
    return {
      id: newOrder.id,
      user_id: newOrder.user_id,
      product_id: newOrder.product_id,
    };
  }

  async listarOrder() {
    return order.findAll();
  }

  async listarPedidoPorId(id) {
    const orderItem = await order.findByPk(id);
    if (!orderItem) {
      throw new Error("Pedido não encontrado");
    }
    return orderItem;
  }

  async atualizarOrder(id, { user_id, product_id }) {
    const orderItem = await order.findByPk(id);
    if (!orderItem) {
      throw new Error("Pedido não encontrado");
    }
    if (user_id !== undefined) orderItem.user_id = user_id;
    if (product_id !== undefined) orderItem.product_id = product_id;
    await orderItem.save();
    return orderItem;
  }

  async deletarOrder(id) {
    const orderItem = await order.findByPk(id);
    if (!orderItem) {
      throw new Error("Pedido não encontrado");
    }
    await order.destroy({ where: { id } });
    return { message: "Pedido deletado com sucesso" };
  }
}

module.exports = new OrderController();