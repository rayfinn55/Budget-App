const express = require("express");
const tasks = express.Router();
const tasksArray = require("../models/budget.js");

tasks.get("/", (req, res) => {
    res.json(tasksArray)
});

tasks.get("/:index", (req, res) => {
    const { index } = req.params;
    if(tasksArray[index]) {
        res.status(200).json(tasksArray[index]);
    } else {
        res.redirect("/404")
    }
});

tasks.post("/", (req, res) => {
    tasksArray.push(req.body);
    res.json(tasksArray[tasksArray.length-1]);
});

tasks.delete("/:index", (req, res)=> {
    const { index } = req.params
    if (tasksArray[index]) {
        res.status(200).json(tasksArray.splice(index, 1))
    } else {
        res.redirect("/404")
    }
});

tasks.put("/:index", (req, res) => {
    tasksArray[req.params.index] = req.body;
    res.status(200).json(tasksArray[req.params.index]);
});


module.exports = tasks;