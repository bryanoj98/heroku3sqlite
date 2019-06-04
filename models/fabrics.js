'use strict';
module.exports = (sequelize, DataTypes) => {
  const fabrics = sequelize.define('fabrics', {
    usersId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER
  }, {
 paranoid: true,
    underscored: true
});
  fabrics.associate = function(models) {
    // associations can be defined here
  };
  return fabrics;
};
