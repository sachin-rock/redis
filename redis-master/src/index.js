const express = require("express");

const todosController = require("./controllers/todo.controllers");

const app = express();

app.use(express.json());

app.use("/todos", todosController);

module.exports = app;
