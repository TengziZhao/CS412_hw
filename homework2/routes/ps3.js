const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render("mypug",{head:'homework 2'});
});


//http://localhost:3000/ps3/p1
router.get('/p1', function(req, res, next) {
    res.render("mypug",{head:'hey now'});
});

router.post('/p2', function(req, res, next) {
    res.render('mypug',{head:"Input: "+req.body.value,para:"Length: "+req.body.value.length});
});

router.get('/:name', function(req, res, next) {
    res.render("mypug",{head: 'Name:' + req.params.name});
});

module.exports = router;