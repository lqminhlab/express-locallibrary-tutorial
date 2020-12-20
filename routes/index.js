var express = require('express');
let EmailModel = require("../database/models/author")
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.redirect('/catalog');
});

module.exports = router;
