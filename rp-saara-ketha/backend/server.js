const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");

//config
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//default route
app.get("/", (req, res) => {
  res.send("Welcome to the Saara Ketha API");
});

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);

//export app
module.exports = app;
