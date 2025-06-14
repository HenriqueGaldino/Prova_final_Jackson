const controller = require('../controllers/productControllers');

class ProductApi {
    async createProduct(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const category_id = req.body.category_id;

        try {
            const product = await controller.createProduct(name, price, category_id);
            res.status(201).json(product);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    
    async listarProduct(req, res) {
        try {
            const produtos = await controller.listarProduct();
            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

   
    async deletarProduct(req, res) {
        const id = req.params.id;

        try {
            await controller.deletarProduct(id);
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async atualizarProduct(req, res) {
        const id = req.params.id;
        const { name, price, category_id } = req.body;

        try {
            const produtoAtualizado = await controller.atualizarProduct(id, name, price, category_id);
            res.status(200).json(produtoAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar o produto:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

}

module.exports = new ProductApi();