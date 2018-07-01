"use strict";
const uuid = require("uuid/v1");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Assessments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: () => uuid()
      },
      fellow: {
        type: Sequelize.STRING,
        unique: true
      },
      assessor: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /*, Sequelize*/) => {
    return queryInterface.dropTable("Assessments");
  }
};
