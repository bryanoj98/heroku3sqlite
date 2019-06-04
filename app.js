const  express = require('express');
const app =express();
const path =require('path');
const bodyParser = require('body-parser');
const db = require('./Data/database');
const controller = require('./controllers/index');
var port=4000 || process.env.PORT
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Express listening on port:', port);
    console.log(db.user.findAll())

    controller(app,db)
  });
});
