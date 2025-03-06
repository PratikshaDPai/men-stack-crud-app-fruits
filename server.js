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
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
