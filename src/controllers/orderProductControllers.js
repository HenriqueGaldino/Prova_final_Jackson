const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OrderProduct = require("../models/orderProduct");
 
const SECRET = process.env.JWT_SECRET || "defaultsecret";
const orderProductController = {
  async criarOrderProduct(orderId, productId,) {
    if (orderId === undefined
        || productId === undefined
    ) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
 
    const newOrderProduct = await OrderProduct.create({
      orderId,
      productId,
      quantity,
    });
 
    return newOrderProduct;
  },
 
  async listarOrderProducts() {
    return OrderProduct.findAll();
  },
 
  async deletarOrderProduct(id) {
    if (id === undefined) {
      throw new Error("Preencha o campo obrigatório");
    }
    const orderProductToDelete = await OrderProduct.findByPk(id);
    if (!orderProductToDelete) {
      throw new Error("OrderProduct não encontrado");
    }
    await OrderProduct.destroy({ where: { id } });
    return { message: "OrderProduct deletado com sucesso" };
  },
 
  async atualizarOrderProduct(id, orderId, productId, quantity) {
    if (id === undefined
        || orderId === undefined
        || productId === undefined
        || quantity === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const orderProductToUpdate = await OrderProduct.findByPk(id);
    if (!orderProductToUpdate) {
      throw new Error("OrderProduct não encontrado");
    }
    await OrderProduct.update(
      { orderId, productId, quantity },
      { where: { id } }
    );
    return { message: "OrderProduct atualizado com sucesso" };
  },
 
  async buscarOrderProductPorId(id) {
    if (id === undefined) {
      throw new Error("Preencha o campo obrigatório");
    }
    const orderProduct = await OrderProduct.findByPk(id);
    if (!orderProduct) {
      throw new Error("OrderProduct não encontrado");
    }
    return orderProduct;
  },
 
  async buscarOrderProductsPorOrderId(orderId) {
    if (orderId === undefined) {
      throw new Error("Preencha o campo obrigatório");
    }
    const orderProducts = await OrderProduct.findAll({
      where: { orderId },
    });
    if (orderProducts.length === 0) {
      throw new Error("Nenhum OrderProduct encontrado para este Order ID");
    }
    return orderProducts;
  },
 
 
 
};
 
module.exports = orderProductController;