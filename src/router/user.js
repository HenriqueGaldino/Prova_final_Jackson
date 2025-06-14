const Router = require('express').Router;
const userApi = require('../api/user');
 
const router = Router();
router.post('/login', userApi.login);
 
router.post('/', userApi.criaruser);
router.get('/', userApi.listarUser);
router.delete('/:id', userApi.deletarUser);
router.put('/:id', userApi.atualizarUser);
 
 
module.exports = router;