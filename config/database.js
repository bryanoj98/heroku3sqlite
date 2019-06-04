const Sequelize = require('sequelize');

const sequelize =  new Sequelize('base.db', null, null, {
  //host: 'localhost',
  dialect: 'sqlite',
  storage: '../base_datos/base.db',
  define: {
    timestamps: false
},
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.user = require('../models/user.js')(sequelize, Sequelize);
db.fabrics = require('../models/fabrics.js')(sequelize, Sequelize);
db.sa = require('../models/sadata.js')(sequelize, Sequelize);

//Relations
db.sa.belongsTo(db.fabrics);
db.fabrics.hasOne(db.sa);
db.fabrics.belongsTo(db.user);
db.user.hasOne(db.fabrics);

module.exports = db;
