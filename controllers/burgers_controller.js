
var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var obj = {
      burgers: data
    };
    console.log(obj);
    res.render("index", obj);
  });
});

module.exports = router;