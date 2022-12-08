const { Router } = require("express");
const EscolaController = require("../controllers/escolasController");
const route = Router();

const registerRoute = route.post("/cadastro/escola", EscolaController.create);

const findAll = route.get("/escolas", EscolaController.index);

const deleteOne = route.delete("/escola/delete", EscolaController.deleteOne);

module.exports = route;
