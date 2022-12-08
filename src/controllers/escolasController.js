const { cnpj } = require("cpf-cnpj-validator");
const Escolas = require("../model/Escolas");

class EscolaController {
  static async create(req, res) {
    try {
      const { nome, receivedCnpj, endereco } = req.body;

      if (nome === "" || nome === undefined) {
        res.json("Nome inválido");
        return;
      }

      if (endereco === "" || endereco === undefined) {
        res.json("Endereço inválido");
        return;
      }

      if (!cnpj.isValid(receivedCnpj)) {
        res.json("Cnpj Invalido");
        return;
      }

      const escola = await Escolas.create({
        nome: nome,
        cnpj: cnpj.format(receivedCnpj),
        endereco: endereco,
      });

      res.json(escola, { resposta: "Criado com sucesso" });
    } catch (error) {
      res.json(error);
    }
  }

  static async index(req, res) {
    try {
      const { nome, receivedCnpj, endereco } = req.body;

      if (nome === "" || nome === undefined) {
        res.json("Nome inválido");
        return;
      }

      if (endereco === "" || endereco === undefined) {
        res.json("Endereço inválido");
        return;
      }

      if (!cnpj.isValid(receivedCnpj)) {
        res.json("Cnpj Invalido");
        return;
      }

      const escolas = await Escolas.findAll();

      res.json(escolas);
    } catch (error) {
      res.json(error);
    }
  }

  static async deleteOne(req, res) {
    try {
      const { turmaId: escolaId } = req.body;

      const turma = await Turmas.findByPk(parseInt(escolaId));

      if (!turma) {
        res.json("Turma não existe");
        return;
      }

      await Escolas.destroy({
        where: { id: parseInt(escolaId) },
      });
      res.json("Turma deletada");
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = EscolaController;
