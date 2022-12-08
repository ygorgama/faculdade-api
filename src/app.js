const express = require("express");
const routeTurma = require("./routes/turmaRoutes");
const routeProfessor = require("./routes/professoresRoute");
const routeAluno = require("./routes/alunoRoute");
const routeEscolas = require("./routes/escolasRoute");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routeTurma);
app.use(routeProfessor);
app.use(routeAluno);
app.use(routeEscolas);

module.exports = app;
