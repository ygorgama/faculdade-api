const { Model, DataTypes } = require("sequelize");

class Professores extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        titulo: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(model) {
    this.belongsTo(model.Turmas, { foreignKey: "turma_id", as: "turma" });
  }
}

module.exports = Professores;
