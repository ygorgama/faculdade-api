const Turmas = require("../model/Turmas");
const { cpf } = require("cpf-cnpj-validator");
const Professores = require("../model/Professores");

class ProfessoresControllers {
  static async create(req, res) {
    try {
      const { nome, receivedCpf, titulo, turmaId } = req.body;

      if (nome === "" || nome === undefined) {
        res.json("Nome invalido");
      }
      if (titulo === "" || titulo === undefined) {
        res.json("Titulaçã inválida");
        return;
      }

      if (!cpf.isValid(receivedCpf)) {
        res.json("Parametros de sala inválidos");
        return;
      }

      const turma = await Turmas.findByPk(parent(turmaId));

      if (!turma) {
        res.json(
          `Você tem que selecionar uma disciplina, 
          ou cadastrar uma turma caso não tenha cadastrado`
        );
        return;
      }

      await Professores.create({
        nome: nome,
        titulo: titulo,
        cpf: cpf.format(receivedCpf),
        turma_id: parseInt(turmaId),
      });

      res.json("Professor criado com sucesso");
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

  static async deleteProfessor(req, res) {
    try {
      const { professor_id } = req.params;

      const aluno = await Professores.destroy({
        where: { id: parseInt(professor_id) },
      });

      res.json(aluno);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ProfessoresControllers;
