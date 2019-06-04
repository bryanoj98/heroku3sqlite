'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    roleNombre: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
   paranoid: true,
   underscored: true
});
  role.associate = function(models) {
    // associations can be defined here
  };
  return role;
};
