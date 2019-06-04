//const router =express.Router();
const  express = require('express');
const path =require('path');
const Data = require('../../business/business')
const fabrica = require('../../business/fabricas')
var antes =""
module.exports = (app, db) => {
    // GET admin page
    // config
    app.use(express.static(path.join(__dirname, 'public')));

    app.post('/admin', (req, res) => {
      res.render('admin.html');

    });
  // POST read all data  from users
  app.post('/admin/leer', (req, res) => {
     fabrica.test.userAll(db).then(function(result){
    //Data.userAll(db).then(function(result){
    res.json(result);
    });
  });
  app.get('/admin/leer', (req, res) => {
    Data.userAll(db).then(function(result){
    res.json(result);
    });
  });
// read one user from data
app.post('/admin/read-one', (req, res) => {
  //console.log(req.body)
  user = req.body.userName;
  Data.UserinfoUsername(user,db).then(function(result){
   console.log(result);
   if(result !="")
   {
  antes = result[0].userName;
  res.json(result);
   }else
   res.json("paila")
  });
});

app.post('/admin/crear', (req, res) => {
  Data.CreateUser(req,db)
  res.json("done");
});
app.post('/admin/update', (req, res) => {
  Data.UpdateUser(req,db,antes).then(function(result){
    if(result === "paila")
    res.send('paila');
    else
    res.send('done');
  })
});

app.post('/admin/delete', (req, res) => {
  user = req.body.userName;
  Data.UserinfoUsername(user,db).then(function(result){
    console.log(result);
    if(result !="")
    {
      Data.removeUser(req,db)
      res.json("done");
    }else
    res.json("paila")
   });
});
}
