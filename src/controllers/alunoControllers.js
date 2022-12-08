const Turmas = require("../model/Turmas");
const { cpf } = require("cpf-cnpj-validator");
const Alunos = require("../model/Alunos");

class AlunoController {
  static async create(req, res) {
    try {
      const { nome, receivedCpf } = req.body;

      const turma = await Turmas.findOne({ where: { sala: 1 } });

      if (!turma) {
        res.json("Primeiro modulo não cadastrado");
        return;
      }

      if (nome === "" || nome === undefined) {
        res.json("Nome invalido");
        return;
      }

      if (!cpf.isValid(receivedCpf)) {
        res.json("Parametros de sala inválidos");
        return;
      }

      const aluno = await Alunos.create({
        nome: nome,
        cpf: cpf.format(receivedCpf),
        turma_id: turma.dataValues.id,
        nota_final: Math.floor(Math.random() * (10 - 1) + 1),
      });

      res.json(aluno);
    } catch (error) {
      res.json(error);
    }
  }

  static async getAluno(req, res) {
    const { aluno_id } = req.params;

    const aluno = await Alunos.findAll({
      include: { association: "turma" },
      where: { id: aluno_id },
    });

    res.json(aluno);
  }

  static async updateSala(req, res) {
    try {
      const { sala } = req.body;
      const { aluno_id } = req.params;

      const turma = await Turmas.findOne({ where: { sala: sala } });
      const aluno = await Alunos.findByPk(aluno_id);

      if (Number(aluno.dataValues.nota_final) < 6) {
        res.json("Nota do aluno  menor do que 6");
        return;
      }
      if (!turma) {
        res.json("Sala não existe");
        return;
      }

      await Alunos.update(
        { turma_id: turma.dataValues.id },
        { where: { id: aluno_id } }
      );

      res.json("Updated");
    } catch (error) {
      res.json(error);
    }
  }

  static async deleteAluno(req, res) {
    try {
      const { aluno_id } = req.params;

      const aluno = await Alunos.destroy({
        where: { id: parseInt(aluno_id) },
      });

      res.json(aluno);
    } catch (error) {
      res.json(error);
    }
  }

  static async updateNota(req, res) {
    try {
      const { notaFinal } = req.body;
      const { aluno_id } = req.params;

      const aluno = await Alunos.findByPk(aluno_id);

      if (!aluno) {
        throw new Error("Aluno não existe");
      }

      if (typeof Number(notaFinal) !== "number") {
        throw new Error("Parametro de nota inserido inválido");
      }

      await Alunos.update(
        { nota_final: notaFinal },
        { where: { id: aluno_id } }
      );

      res.json("Updated");
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = AlunoController;
