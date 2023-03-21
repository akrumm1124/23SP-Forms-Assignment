var express = require('express');
var router = express.Router();
const formController = require('../controllers/formController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/bird-submit', function(req,res,next) {
formController.form_post(req, res)
});

module.exports = router;
