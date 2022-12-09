const { Router } = require("express");
const ProfessoresControllers = require("../controllers/professorController");
const route = Router();

const registerRoute = route.post(
  "/cadastro/professor",
  ProfessoresControllers.create
);

const findOne = route.get(
  "/professor/:professor_id",
  ProfessoresControllers.getProfesor
);

const updateOne = route.put(
  "/professor/:professor_id/titulo",
  ProfessoresControllers.updateTitulo
);

const deleteOne = route.delete(
  "/professor/delete/:professor_id",
  ProfessoresControllers.deleteProfessor
);

module.exports = route;
