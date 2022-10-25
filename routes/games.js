const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

router.get("/", (req, res) => {
  res.send("We are on games");
});

router.post("/", (req, res) => {
  const game = new Game({
    title: req.body.title,
    price: req.body.price,
    year: req.body.year,
    rating: req.body.rating,
  });
  game
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
  // console.log(req.body);
});

module.exports = router;
