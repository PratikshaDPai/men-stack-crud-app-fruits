const dotenv = require("dotenv"); // require package
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Fruit = require("./models/fruit.js");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits/new");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
