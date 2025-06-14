const controller = require('../controllers/userControllers');
 
class userApi {
    async criaruser(req, res) {
        const  name = req.body.name;
        const  email = req.body.email;
        const  password = req.body.password;
 
        try {
            const user = await controller.criaruser(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }
 
    async listarUser(req, res) {
        try {
            const usuarios = await controller.listarUsuarios();
            return res.status(200).send(usuarios);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
 
    async deletarUser(req, res) {
        const { id } = req.params;
 
        try {
            const usuario = await controller.deletarUser(id);
            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

     async atualizarUser(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        try {
            const usuarioAtualizado = await controller.atualizarUser(id, { name, email, password });
            res.status(200).json(usuarioAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const usuario = await controller.login(email, password);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(401).json({ error: 'Credenciais inválidas' });
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            res.status(500).json({ error: 'Erro do Servidor Interno' });
        }
    }

}
 
 
module.exports = new userApi();