var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var randomNum = Math.floor(Math.random() * 10);
    res.render('computation', { title: 'Jyothsna Pamarthi works with computation', 
    result:`Math.expm1()  applied to ${randomNum} is ${Math.expm1(randomNum)}`,
    result2:`Math.exp()  applied to ${randomNum} is ${Math.exp(randomNum)}`,
    result3:`Math.atan()  applied to ${randomNum} is ${Math.atan(randomNum)}`,
});
  //res.send(endRes);
});

module.exports = router;

