var express = require('express');
var router = express.Router();

const { User } = require('app/models');
const controller = require('app/controllers/users')(User);

router.get('/', controller.list);
router.post('/', controller.post);
router.get('/:user', controller.get);
router.put('/:user', controller.put);
router.delete('/:user', controller.del);

module.exports = router;
