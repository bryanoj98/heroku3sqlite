//const db = require('../Data/database');
'use strict';
function userAll (db)
{
    return db.user.findAll({})
}

function UserinfoUsername( username,db)
{

    return db.user.findAll({
        where : {userName:username}
    })
}
function UpdateUser(data,db,antes)
{
    var name = data.body.userName;
    var sta = data.body.state;
    var  pass = data.body.password;
    var rol = data.body.role;
    try {
    db.user.findOne({
     where:{ userName : antes}
    }).then(user => {
        return user.update({
        userName: name,
        password:pass,
        role: rol
       })
  });
}
catch {
    return "paila"
}
}

function removeUser(data,db)
{
    var name = data.body.userName;

    db.user.destroy({
         where: { userName: name }
       })
}
function CreateUser(data,db)
{
    var name = data.body.userName;
    var sta = data.body.state;
    var pass = data.body.password;
    var rol = data.body.role;
    db.user.create({
        userName: name,
        state: sta,
        password:pass,
        role: rol,
        created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
      })
      return "done"
}

function checkLogin(db,data){
var name = data.body.userName;
var pass = data.body.password;
return db.user.findAll({
    where:{ userName : name,
    password:pass
    }
   })
}
exports.userAll = userAll;
exports.UserinfoUsername = UserinfoUsername;
exports.CreateUser = CreateUser;
exports.UpdateUser = UpdateUser;
exports.removeUser = removeUser;
exports.checkLogin = checkLogin;