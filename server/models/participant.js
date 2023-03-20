'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      
    }
  }
  Participant.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    statusTest: DataTypes.STRING,
    collectedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};