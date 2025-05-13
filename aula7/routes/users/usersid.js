var express = require('express');
var router = express.Router();

router.get('/:usersid', function(req, res, next) {
  res.send(`Bem vindo ${req.params.usersid}!`)
  req.requestTime = Date.now()
  console.log(Date.now())
});

module.exports = router;