const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const qs = require("qs");
const axios = require("axios");
const apiUrl = "https://api.rawg.io/api/games";

router.get("/", (req, res) => {
  let query = req.query;
  let queryString = qs.stringify(query);
  console.log(queryString);
  axios
    .get(`${apiUrl}?${queryString}&key=${process.env.RAWG_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      console.log(queryString);
    });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  axios
    .get(`${apiUrl}/${id}?key=${process.env.RAWG_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/screenshots", (req, res) => {
  let id = req.params.id;
  axios
    .get(`${apiUrl}/${id}/screenshots?key=${process.env.RAWG_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/movies", (req, res) => {
  let id = req.params.id;
  axios
    .get(`${apiUrl}/${id}/movies?key=${process.env.RAWG_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get store links
router.get("/:id/stores", (req, res) => {
  let id = req.params.id;
  axios
    .get(`${apiUrl}/${id}/stores?key=${process.env.RAWG_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
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
