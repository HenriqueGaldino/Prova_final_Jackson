const controller = require('../controllers/categoryControllers');

class categoryApi {
    async criarCategory(req, res) {
        const name = req.body.name;
 

        try {
            const category = await controller.criarCategory(name);
            res.status(201).json(category);
        } catch (error) {
            console.error('Erro ao criar categoria:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

    
    async listarCategory(req, res) {
        try {
            const category = await controller.listarCategory();
            res.status(200).json(category);
        } catch (error) {
            console.error('Erro ao listar categoria:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

    
    async deletarCategory(req, res) {
        const id = req.params.id;

        try {
            await controller.deletarCategory(id);
            res.status(200).json({ message: 'Categoria deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir categoria:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

     async atualizarCategory(req, res) {
        const id = req.params.id;
        const { nome } = req.body;

        try {
            const categoryAtualizada = await controller.atualizarCategory(id, { nome});
            res.status(200).json(categoryAtualizada);
        } catch (error) {
            console.error('Erro ao atualizar a categoria:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

}

module.exports = new categoryApi();