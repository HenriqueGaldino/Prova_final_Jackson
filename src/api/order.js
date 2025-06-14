const controller = require('../controllers/ordercontrollers');

class orderApi {
    async createOrder(req, res) {
        const user_id = req.body.user_id;
        const product_id = req.body.product_id;

        try {
            const order = await controller.createOrder(user_id, product_id);
            res.status(201).json(order);
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

    // Método para listar todos os pedidos
    async listarOrder(req, res) {
        try {
            const order = await controller.listarOrder();
            res.status(200).json(order);
        } catch (error) {
            console.error('Erro ao listar pedido:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

    // Método para deletar um pedido pelo ID
    async deletarOrder(req, res) {
        const id = req.params.id;

        try {
            await controller.deletarOrder(id);
            res.status(200).json({ message: 'Pedido deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir pedido:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

     async atualizarOrder(req, res) {
        const id = req.params.id;
        const { user_id, product_id } = req.body;

        try {
            const orderAtualizado = await controller.atualizarOrder(id, { user_id, product_id });
            res.status(200).json(orderAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar pedido:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

}

module.exports = new orderApi();