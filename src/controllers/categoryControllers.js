const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const category = require("../models/category");

class CategoryController {
  async criarCategory(name) {
    if (name === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newCategory = await category.create({ name });
    return {
      id: newCategory.id,
      name: newCategory.name,
    };
  }

  async listarCategory() {
    return category.findAll();
  }

  async listarCategoriaPorId(id) {
    const cat = await category.findByPk(id);
    if (!cat) {
      throw new Error("Categoria não encontrada");
    }
    return cat;
  }

  async atualizarCategory(id, { name }) {
    const cat = await category.findByPk(id);
    if (!cat) {
      throw new Error("Categoria não encontrada");
    }
    if (name !== undefined) cat.name = name;
    await cat.save();
    return cat;
  }

  async deletarCategory(id) {
    const cat = await category.findByPk(id);
    if (!cat) {
      throw new Error("Categoria não encontrada");
    }
    await category.destroy({ where: { id } });
    return { message: "Categoria deletada com sucesso" };
  }
}

module.exports = new CategoryController();