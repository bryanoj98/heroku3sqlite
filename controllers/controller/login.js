const  express = require('express');
const path =require('path');
const business = require('../../business/business')

module.exports = (app, db) => {

app.get('/', (req, res) => {
    // res.render('login.html');
    res.sendFile(path.join(__dirname, 'login.html'));

  });
  app.post('/login/enter', (req, res) => {
    //res.render('login.html');
   //popo(db,req,req);
   business.checkLogin(db,req).then(function(result){
    console.log(result[0].role);
   res.json(result[0].role);
});


  });

}
