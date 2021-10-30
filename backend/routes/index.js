var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var passwordFromUser = "test_user_pass";
var salt = bcrypt.genSaltSync(10);
var passwordToSave = bcrypt.hashSync(passwordFromUser, salt)


console.log(salt);
console.log(passwordFromUser);
console.log(passwordToSave);
module.exports = router;
