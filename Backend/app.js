'use strict'

var express = require('express');
var bodyParser = require('body-parser');


//ejecutar express (http)
var app = express();

//cargar ficheros rutas
var article_routes = require('./routes/article');


//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//importante configuracion para acceder las api
//encaso contrario se bloquiara el paso a el front-end

//CORS

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//AÑADIR  prefijos o rutas/ cargar rutas
app.use('/api', article_routes);

//ruta o metodo de prueba para el API REST
//app.get('/probando', (red, res)=>{
/*
return res.status(200).send({
	curso: 'Master en frameworks',
	autor: 'alberto',

});*/
//});


//Exportar modulo (fichero actual)
module.exports = app;