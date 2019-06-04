const Sequelize = require('sequelize');
var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);

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
