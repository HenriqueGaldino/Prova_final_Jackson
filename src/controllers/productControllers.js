const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const product = require("../models/product");

class ProductController {
  async createProduct(name, price, category_id) {
    if (name === undefined || price === undefined || category_id === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newProduct = await product.create({
      name,
      price,
      category_id,
    });
    return {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      category_id: newProduct.category_id,
    };
  }

  async listarProduct() {
    return product.findAll();
  }

  async listarProdutoPorId(id) {
    const prod = await product.findByPk(id);
    if (!prod) {
      throw new Error("Produto não encontrado");
    }
    return prod;
  }

  async atualizarProduct(id, name, price, category_id) {
    if (id === undefined
        || name === undefined
        || price === undefined
        || category_id === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const productToUpdate = await product.findByPk(id);
    if (!productToUpdate) {
      throw new Error("Produto não encontrado");
    }
    await product.update(
      { name, price, category_id },
      { where: { id } }
    );
    return { message: "Produto atualizado com sucesso" };
  }

  async deletarProduct(id) {
    const prod = await product.findByPk(id);
    if (!prod) {
      throw new Error("Produto não encontrado");
    }
    await product.destroy({ where: { id } });
    return { message: "Produto deletado com sucesso" };
  }
}

module.exports = new ProductController();