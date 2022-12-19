const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mangoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();

// * Middlewares

app.use(cors());
app.use(express.json());

// * Import Routes

const gamesRoute = require("./routes/games");
const developersRoute = require("./routes/developers");
const publishersRoute = require("./routes/publishers");
const userRoute = require("./routes/user");

app.use("/games", gamesRoute);
app.use("/developers", developersRoute);
app.use("/publishers", publishersRoute);
app.use("/user", userRoute);

// * Routes

app.get("/", (req, res) => {
  res.send("We are on home");
});

// * Connect to MongoDB

// mangoose.connect(process.env.DB_CONNECTION, () => {
//   console.log("Connected to MongoDB");
//   console.log(process.env.DB_CONNECTION);
// });

// const client = new MongoClient(process.env.DB_CONNECTION, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.V1,
// });

// client.connect((err) => {
//   const collection = client.db("test").collection("games");
//   // client.close();
// });

// * Server

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
