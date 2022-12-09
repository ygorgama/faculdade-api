const { where } = require("sequelize");
const Turmas = require("../model/Turmas");

class TurmaController {
  static async create(req, res) {
    try {
      const { sala, disciplina } = req.body;

      if (disciplina === "" || disciplina === undefined) {
        res.json("Parametros de disciplinas inválidos");
        return;
      }

      if (!parseInt(sala)) {
        res.json("Parametro de sala tem quem ser maior que zero");
        return;
      }

      if (parseInt(sala) <= 0) {
        res.json("Parametros de sala inválidos");
        return;
      }

      await Turmas.create({
        sala: parseInt(sala),
        disciplina,
      });

      res.json("Turma criada");
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

  static async deleteTurma(req, res) {
    try {
      const { turmaId } = req.body;

      const turma = await Turmas.findByPk(parseInt(turmaId));

      if (!turma) {
        res.json("Turma não existe");
        return;
      }

      await Turmas.destroy({
        where: { id: parseInt(turmaId) },
      });
      res.json(turmaId);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = TurmaController;
