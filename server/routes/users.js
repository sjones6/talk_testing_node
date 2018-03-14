var express = require('express');
var router = express.Router();

const User = require('~/models/user.js');
const controller = require('~/controllers/users')(User);

router.get('/', controller.list);
router.post('/', controller.post);
router.get('/:user', controller.get);
router.put('/:user', controller.put);
router.delete('/:user', controller.del);

module.exports = router;
