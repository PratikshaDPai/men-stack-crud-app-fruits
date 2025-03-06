const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("hello, friend!");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
