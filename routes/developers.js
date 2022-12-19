const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiUrl = "https://api.rawg.io/api/developers";

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

module.exports = router;
