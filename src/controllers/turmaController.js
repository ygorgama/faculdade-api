const { where } = require("sequelize");
const Turmas = require("../model/Turmas");

class TurmaController {
  static async create(req, res) {
    try {
      const { sala, disciplina } = req.body;

      if (disciplina === "" || disciplina === undefined) {
        throw new Error("Parametros de disciplinas inválidos");
      }

      if (!parseInt(sala)) {
        throw new Error("Parametros de sala inválidos");
      }

      if (parseInt(sala) <= 0) {
        throw new Error("Parametros de sala inválidos");
      }

      const createdTurma = await Turmas.create({
        sala: parseInt(sala),
        disciplina,
      });

      res.json(createdTurma);
    } catch (error) {
      res.json(error);
    }
  }

  static async indexOne(req, res) {
    try {
      const { turma_id } = req.params;

      const turma = await Turmas.findByPk(turma_id, {
        include: [
          {
            association: "professor",
          },
          {
            association: "alunos",
          },
        ],
      });

      res.json(turma);
    } catch (error) {
      res.json(error);
    }
  }

  static async index(req, res) {
    try {
      const turmas = await Turmas.findAll({
        include: [
          {
            association: "professor",
          },
          {
            association: "alunos",
          },
        ],
      });
      res.json(turmas);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = TurmaController;
