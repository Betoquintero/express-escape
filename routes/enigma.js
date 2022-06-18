const express = require("express");
const router = express.Router();
const User = require("../models/User");
const isLoggedIn = require("../middlewares");

router.get("/", isLoggedIn, (req, res, next) => {
  res.render("enigma");
});

router.get('/create', async (req, res, next) => {
  try {
      const enigmas = await Enigma.find({})
      res.render('enigma/new-enigma', {enigmas})
  } catch (error) {
      next(error)
  }
});

router.post('/create', async (req, res, next) => {
  const {title, number, description, image, team} = req.body;
      try {
      await Team.create ({title, number, description, image, team})
      //res.json({teams})
      res.redirect("/enigma");
  } catch (error) {      
      next(error)
  }
});



module.exports = router;
