const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { string: 'This is ps3' });
});


module.exports = router;
