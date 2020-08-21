const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get('/', productController.index);

router.post('/', productController.store);

router.get('/:id', productController.show);

router.put('/:id', productController.update);

router.delete('/:id', productController.destroy);


module.exports = router;