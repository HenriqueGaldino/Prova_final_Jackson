const Router = require('express').Router;
const ProductApi = require('../api/product');

const router = Router();

router.post('/', ProductApi.createProduct);        
router.get('/', ProductApi.listarProduct);       
router.delete('/:id', ProductApi.deletarProduct); 
router.put('/:id', ProductApi.atualizarProduct); 

module.exports = router;