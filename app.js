const express = require("express");
const app = express();
const cors = require ("cors")
const budgetController = require("./controllers/budgetController")

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Welcome To my Budget Backend!");
});

app.use("/tasks", budgetController);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

app.get("/tasks/:id", (req, res) => {
  res.send("")
});

module.exports = app