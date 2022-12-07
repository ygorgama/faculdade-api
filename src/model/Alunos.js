const { Model, DataTypes } = require("sequelize");

class Alunos extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        nota_final: DataTypes.DOUBLE,
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

module.exports = Alunos;
