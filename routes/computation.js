var express = require('express');
var router = express.Router();
var randomNum = Math.floor(Math.random() * 10);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'Jyothsna Pamarthi works with computation', result:`f(${Math.expm1()})  applied to ${randomNum} is ${Math.expm1(randomNum)}`});
  //res.send(endRes);
});


module.exports = router;
