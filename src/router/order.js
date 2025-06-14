const Router = require('express').Router;
const orderApi = require('../api/order');

const router = Router();

router.post('/', orderApi.createOrder);         
router.get('/', orderApi.listarOrder);          
router.delete('/:id', orderApi.deletarOrder);  
router.put('/:id', orderApi.atualizarOrder);

module.exports = router;