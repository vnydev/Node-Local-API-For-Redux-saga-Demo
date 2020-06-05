var express = require('express');
var router = express.Router();
const { Create_user, GetAll } = require('../controller/users');

router.route('/').get(GetAll);
router.route('/').post(Create_user);

module.exports = router;
