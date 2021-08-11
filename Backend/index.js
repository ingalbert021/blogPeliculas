'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

//promesas
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
/*conexion a la base de datos*/
//los parametros son la dirrecion(localhost:mas el puerto que este utilizando/ nombre de la base de datos creada)
//luego la opcion en este caso {useNewUrlParser: true} que te permitira utilizar las nuevas sintasis que tiene mongodb
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true})
.then(() => {
    /*con este console log podemos provar si se conecto bien
    */

    //en la consola ponemos node mas el nombre del fichero en este caso index.js
console.log('la conexiones a las bases de datos se ha realizado bien!!');

//crear servidor y ponerme  a escuchar peticiones http
app.listen(port, () => {
	console.log('servidor corriendo en http://localhost:'+ port);
});
});