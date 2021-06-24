//import framwork express
const { request, response } = require('express');
const express = require('express')
//instance de framwork
const app = express();

//iportation des routes
const routes = require('./Routes/PostsRoutes');
app.use('/', routes);


//export de fichier app.js
module.exports = app;
