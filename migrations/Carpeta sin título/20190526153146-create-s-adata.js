'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SAdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temp: {
        type: Sequelize.DECIMAL
      },
      airPwm: {
        type: Sequelize.INTEGER
      },
      pot: {
        type: Sequelize.DECIMAL
      },
      photo: {
        type: Sequelize.BOOLEAN
      },
      lightbuldPwm: {
        type: Sequelize.INTEGER
      },
      led: {
        type: Sequelize.BOOLEAN
      },
      servoPwm: {
        type: Sequelize.INTEGER
      },
      pulse: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SAdata');
  }
};