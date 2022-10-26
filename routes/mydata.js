var express = require('express');
var router = express.Router();

/* GET funfact about me on mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jyothsna Pamarthi' });
});

module.exports = router;
