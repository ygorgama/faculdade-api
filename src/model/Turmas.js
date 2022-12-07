const { Model, DataTypes } = require("sequelize");

class Turmas extends Model {
  static init(connection) {
    super.init(
      {
        sala: DataTypes.INTEGER,
        disciplina: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(model) {
    this.hasOne(model.Professores, { foreignKey: "turma_id", as: "professor" });
    this.hasMany(model.Alunos, { foreignKey: "turma_id", as: "alunos" });
  }
}

module.exports = Turmas;
