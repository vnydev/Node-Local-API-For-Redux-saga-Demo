var express = require('express');
var router = express.Router();
const { GetAll, GetOne, UpdateProduct, Create_Product } = require('../controller/product');

router.route('/:id').get(GetOne);
router.route('/').get(GetAll);
router.route('/').post(Create_Product);
router.route('/').put(UpdateProduct);

module.exports = router;
