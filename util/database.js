const Sequelize = require("sequelize");

const sequelize = new Sequelize("cleaning-db", "root", "P@ssword1", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
