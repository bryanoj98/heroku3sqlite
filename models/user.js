'use strict'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
          id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
    userName: {
      type: DataTypes.STRING,
      required: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    },
    role: {
      type: DataTypes.STRING,
      //values: ['cliente', 'admin', 'comercial','tecnico']

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true
  });
  return user;
};
