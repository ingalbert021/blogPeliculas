'use strict'
var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');

var controller = {

	datosCurso: (req, res) => {

		return res.status(200).send({
	curso: 'Master en frameworks',
	autor: 'alberto',

});
	},

	test: (req, res) => {
		return res.status(200).send({
message: 'soy la accion test de mi controlador de articulos'
		});

	},
save: (req, res) => {

	//Recoger parametros por post
var params = req.body;

	//validar datos (validator)
try{

	var validate_title = !validator.isEmpty(params.title);
var validate_content = !validator.isEmpty(params.content);
    

    }catch(err){
		return res.status(200).send({
    status:'error',
    message: 'Faltan datos por enviar !!!'
	});
}

if(validate_title && validate_title){

//crear el objecto a guardar
var article = new Article();
//asignar valores
article.title = params.title;
article.content = params.content;

if(params.image){
article.image = params.image;
}else{
	article.image = null;
}



//guardar el articulo
article.save((err, articleStored) => {

if(err || !articleStored){
	return res.status(404).send({
		status: 'error',
		message: 'el articulo no se ha guardado !!!'
	});
}


//devolver una respuesta
return res.status(200).send({
	status: 'success',
	article: articleStored
 
 });

});



}else{
	return res.status(200).send({
		 status:'error',
			message: 'los datos no son validos!!'
	});
} 

},

getArticles: (req, res) =>{
	var query = Article.find({});

	var last = req.params.last;
	if(last || last != undefined){
    query.limit(5);
	}
	//Find
	query.sort('-_id').exec((err, articles)=>{
		if(err){
				return res.status(500).send({
		 status:'error',
			message: 'error al devolver los datos!!'
	});	

		}

		if(!articles){
				return res.status(404).send({
		 status:'error',
			message: 'no hay articulos para mostrar!!'
	});	

		}
	return res.status(200).send({
		 status:'succes',
			articles
	});	
	});
	
},

getArticle: (req, res) => {
//Recoger el id de la url
var articleId = req.params.id;

//comprobar que existe 
if(!articleId || articleId == null){
	return res.status(404).send({
status: 'error',
message: 'no existe el articulo !!'
	});
}

//buscar el articulo
Article.findById(articleId, (err, article) =>{

if(err || !article){
	return res.status(404).send({
status: 'error',
message: 'Error al devolver los datos'
	});
}/*
if(!article){
	return res.status(404).send({
status: 'error',
message: 'No existe el articulo'
	});

}*/

//devolverlo en el json
return res.status(200).send({
status:'success',
article
});



});


},

update: (req, res) => {
        // Recoger el id del articulo por la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            }); 
        }

        if(validate_title && validate_content){
             // Find and update
             Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
             });
        }else{
             // Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta !!!'
            });
        }
       
    },
delete: (req, res)=>{
	//recoger el id de la url
var articleId = req.params.id;

	//find and delete
	Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
if(err){
	return res.status(500).send({
status: 'error',
message: 'error al borrar !!'
	});

	}
	if(!articleRemoved){
		return res.status(404).send({
status: 'error',
message: 'no se ha guardado el articulo, posiblemente no existo !!'

});
}

return res.status(200).send({
status: 'success',
article: articleRemoved
});

});

},


upload: (req, res) =>{

	//configurar el modulo connect multiparty router/article.js
var file_name = 'Imagen no subida....';

if(!req.files){
	return res.status(404).send({
status: 'error',
message: file_name
	});
}
//Recoger la extension, solo imagenes, si es valida borrar el fichero
var file_path = req.files.file0.path;
var file_split = file_path.split('\\');


//nomre del archivo
var file_name = file_split[2];

//extension del fichero
var extension_split = file_name.split('\.');
var file_ext = extension_split[1];


//comprobar la extension, solo imagenes, si es valida borrar el fichero
if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'git'){
//borrar el archivo subido
fs.unlink(file_path, (err) =>{
	return res.status(200).send({
status:'error',
message: 'la extension de la imagen no es valida !!'
	});
});

}else{
             // Si todo es valido, sacando id de la url
             var articleId = req.params.id;

             if(articleId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, (err, articleUpdated) => {

                    if(err || !articleUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
             }
            
        } 





},//end upload file

getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },

search: (req, res) => {
	   // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {
		
   if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }

  if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });
    }

    }; // end controller


module.exports = controller;
 