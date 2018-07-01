"use strict";
const uuid = require("uuid/v1");
module.exports = (sequelize, DataTypes) => {
  var Assessment = sequelize.define("Assessment", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: () => uuid()
    },
    fellow: DataTypes.STRING,
    assessor: DataTypes.STRING,
    score: DataTypes.NUMBER,
    status: DataTypes.STRING
  }, {});
  Assessment.associate = function(/*models*/) {
    // associations can be defined here
  };
  return Assessment;
};
