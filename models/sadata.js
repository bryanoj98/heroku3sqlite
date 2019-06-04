'use strict';
module.exports = (sequelize, DataTypes) => {
  const SAdata = sequelize.define('SAdata', {
    presencia: DataTypes.BOOLEAN,
    estadocaja: DataTypes.STRING,
    buenas: DataTypes.INTEGER,
    malas: DataTypes.INTEGER,
    onoff: DataTypes.BOOLEAN
  }, {
 paranoid: true,
    underscored: true
});
  SAdata.associate = function(models) {
    // associations can be defined here
  };
  return SAdata;
};
