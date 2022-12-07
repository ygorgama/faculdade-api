const express = require("express");
const routeTurma = require("./routes/turmaRoutes");
const routeProfessor = require("./routes/professoresRoute");
const routeAluno = require("./routes/alunoRoute");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routeTurma);
app.use(routeProfessor);
app.use(routeAluno);

module.exports = app;
