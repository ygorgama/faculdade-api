const { Router } = require("express");
const TurmaController = require("../controllers/turmaController");
const route = Router();

const registerRoute = route.post("/cadastro/turma", TurmaController.create);
const getOne = route.get("/turmas/:turma_id", TurmaController.indexOne);
const getAll = route.get("/turmas", TurmaController.index);

module.exports = route;
