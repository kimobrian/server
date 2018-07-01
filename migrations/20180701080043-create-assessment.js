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
        type: Sequelize.STRING
      },
      assessor: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.NUMBER
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
