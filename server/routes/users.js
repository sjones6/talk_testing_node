var express = require('express');
var router = express.Router();

const User = require('~/models/user.js');
const controller = require('~/controllers/users')(User);

router.get('/', controller.list);
router.get('/:user', controller.get);

module.exports = router;
