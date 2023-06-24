
/**
 * 2 - Parte do Projeto
 * Parte responsavel pela configuracao de conexao com o banco de dados
 */

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "@354Xe%tsLa@",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
