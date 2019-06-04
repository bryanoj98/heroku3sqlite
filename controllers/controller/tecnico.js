'use strict';
const  express = require('express');
const path =require('path');
const business = require('../../business/business')

module.exports = (app, db) => {

app.get('/', (req, res) => {
    res.render('login.html');
  });
  app.post('/tecnico', (req, res) => {
  res.render('tecnico.html');
  });

}
