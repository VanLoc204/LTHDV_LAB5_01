const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/new', productController.newProduct);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.get('/:id/edit', productController.editProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
