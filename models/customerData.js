const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../util/database");

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  phoneNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Customer;
