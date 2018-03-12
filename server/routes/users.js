var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/:user', (req, res, next) => {
  res.json({
    user: req.params.user
  });
});

module.exports = router;
