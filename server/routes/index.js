const { Router } = require('express');
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Introduction to Testing and Debugging' });
});

module.exports = router;
