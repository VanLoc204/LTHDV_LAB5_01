const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.getAllSuppliers);
router.get('/new', supplierController.newSupplier);
router.post('/', supplierController.createSupplier);
router.get('/:id', supplierController.getSupplier);
router.get('/:id/edit', supplierController.editSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
