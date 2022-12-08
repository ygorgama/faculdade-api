const { Model, DataTypes } = require("sequelize");

class Escolas extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        endereco: DataTypes.STRING,
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

module.exports = Escolas;
