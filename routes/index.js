var express = require('express');
var router = express.Router();
const users =  require('./users');
const product = require('./product');

router.get('/', (req, res) => {
  res.send("Express App");
});

router.use('/users', users);
router.use('/product', product);

module.exports = router;
