const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  noOfBedrooms: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  noOfBathrooms: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  noOfKitchens: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  noOfLivingrooms: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  appointmentDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  appointmentTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  totalCost: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  orderStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Order;
