const { Router } = require("express");
const AlunoController = require("../controllers/alunoControllers");
const route = Router();

const registerRoute = route.post("/cadastro/aluno", AlunoController.create);
const updateSala = route.put(
  "/aluno/sala/:aluno_id",
  AlunoController.updateSala
);

const updateNota = route.put(
  "/aluno/nota/:aluno_id",
  AlunoController.updateNota
);

const deleteAluno = route.delete(
  "/aluno/delete/:aluno_id",
  AlunoController.deleteAluno
);

const getOne = route.get("/aluno/:aluno_id", AlunoController.getAluno);

module.exports = route;
