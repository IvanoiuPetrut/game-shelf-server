const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

const app = express();

// * Middlewares

app.use(cors());

// * Routes

// * Server

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
