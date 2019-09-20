const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/login", function(req, res, next) {
  res.render("login.ejs");
});
router.get("/signup", function(req, res, next) {
  res.render("signup.ejs");
});
router.post("/login", function(req, res, next) {
  console.log(req.body)
  //expect username password
  User.findOne(req.body)
    .then(user => {
      console.log("successfully found user")
      if (user) {
        if (req.body.password === user.password) {
          res.send(200, user);
        } else {
          res.send(400, { err: "Incorrect password" });
        }
      } else {
        res.send(400, {err: "Username does not exist"});
      }
    })
    .catch(err => {
      console.log(err);
      res.send(500, err);
    });
});
router.post("/signup", function(req, res, next) {
  console.log(req.body)
  //expect username password
  User.createOne(req.body)
    .then(insertSuccessful => {
      console.log("successfully added user")
      if (insertSuccessful) {
        res.send(200)
      }
    })
    .catch(err => {
      console.log(err);
      res.send(500, err);
    });
});

// Wildcard route
router.get("/*", function(req, res, next) {
  res.render("index", { title: "Chat App" });
});

module.exports = router;
