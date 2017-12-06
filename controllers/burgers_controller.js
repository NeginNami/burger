
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

router.post("/api/burgers",function(req,res) {
	burger.add(["name"],[req.body.name],function (result) {
		res.json({ id: result.insertId });
	});
	
});

module.exports = router;