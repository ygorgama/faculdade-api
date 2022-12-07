const Turmas = require("../model/Turmas");
const { cpf } = require("cpf-cnpj-validator");
const Professores = require("../model/Professores");

class ProfessoresControllers {
  static async create(req, res) {
    try {
      const { nome, receivedCpf, titulo, turmaId } = req.body;

      if (nome === "" || nome === undefined) {
        throw new Error("Nome invalido");
      }
      if (titulo === "" || titulo === undefined) {
        throw new Error("Titulaçã inválida");
      }

      if (!cpf.isValid(receivedCpf)) {
        res.json("Parametros de sala inválidos");
      }

      const turma = await Turmas.findByPk(turmaId);

      if (!turma) {
        throw new Error("Turma não encontrada");
      }

      const professor = await Professores.create({
        nome: nome,
        titulo: titulo,
        cpf: cpf.format(receivedCpf),
        turma_id: turmaId,
      });

      res.json(professor);
    } catch (error) {
      res.json(error);
    }
  }

  static async getProfesor(req, res) {
    const { professor_id } = req.params;

    const professor = await Professores.findAll({
      include: { association: "turma" },
      where: { id: professor_id },
    });

    res.json(professor);
  }

  static async updateTitulo(req, res) {
    try {
      const { professor_id } = req.params;
      const { tituloEnviado } = req.body;
      await Professores.update(
        {
          titulo: tituloEnviado,
        },
        { where: { id: professor_id } }
      );
      res.json("Updated");
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ProfessoresControllers;
