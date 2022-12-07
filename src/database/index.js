const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");
const Alunos = require("../model/Alunos");
const Professores = require("../model/Professores");
const Turmas = require("../model/Turmas");

const connection = new Sequelize(dbConfig);
Turmas.init(connection);
Professores.init(connection);
Alunos.init(connection);

Professores.associate(connection.models);
Alunos.associate(connection.models);
Turmas.associate(connection.models);

module.exports = connection;
