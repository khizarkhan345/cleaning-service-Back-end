const Sequelize = require("sequelize");
//const dotenv = require("dotenv");
//dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // database name
  process.env.USER, // database user
  process.env.DATABASE_PASSWORD, //database password
  {
    dialect: "mysql",
    host: process.env.HOST, //database host
  }
);

module.exports = sequelize;
