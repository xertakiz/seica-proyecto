var mysql = require('mysql');

var config = require('.././database/config');
var db = mysql.createConnection(config);
db.connect();
var plant = null;
db.query('SELECT * FROM matplanta', function(err,rows, fields){
    if(err) throw err;
    plant = rows
    db.end();
});

//material materia planta
module.exports ={

    getPlanta : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var planta = null;
        db.query('SELECT * FROM matplanta', function(err,rows, fields){
            if(err) throw err;

            planta = rows
            db.end();

            res.render('produccion/prima/Planta',{planta : planta, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    postBuscarPlanta: function (req,res, ticket){

        var codigo = req.body.ticket;
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        var planta = null;
        db.query('SELECT * FROM matplanta WHERE codplanta = ?', codigo, function (err, rows, fields) {
            if (err) throw err;
            planta = rows;
            db.end();

            if (planta.length > 0) {
                res.render('produccion/prima/Buscarplanta', {planta: planta, isAuthenticated : req.isAuthenticated(),
                    user : req.user});

            }
            else {
                res.render('produccion/prima/planta',{info:'Codigo no Encontrado',planta: plant, isAuthenticated : req.isAuthenticated(),
                user : req.user})
            }
        }); 
    },

    getNuevoPlanta: function(req,res,next){
        res.render('produccion/prima/NuevoPlanta',{isAuthenticated : req.isAuthenticated(),
        user : req.user});
    },
    postNuevoPlanta: function(req,res,next){
        
        var planta = {
            codplanta : req.body.codplanta,
            nomplanta : req.body.nomplanta,
            existencia : req.body.existencia,
            descripcion : req.body.descripcion
        }
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO matplanta SET?', planta, function(err,rows,fields){
            if(err) throw err;
        });
        res.render('produccion/prima/NuevoPlanta', {info : 'Producto creado correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});
    },
    EliminarPlanta : function(req, res, next){			
        var codplanta = req.body.codplanta;
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var respuesta={res:false};
        db.query('DELETE FROM matplanta WHERE codplanta = ?',codplanta, function(err,rows,fields){
            if(err)throw err; 
            db.end();
            respuesta.res=true;
            res.json(respuesta);
        });
    },
    getModificarPlanta : function(req,res,next){
        var codplanta = req.params.codplanta
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var planta = null;
        db.query('SELECT * FROM matplanta WHERE codplanta = ?',codplanta, function(err,rows,fields){
            if(err)throw err;
            planta = rows;
            db.end();

            res.render('produccion/prima/ModificaPlanta', {planta: planta, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },

    postModificarPlanta :function(req,res,next){
        var planta = {
            nomplanta : req.body.nomplanta,
            existencia : req.body.existencia,
            descripcion : req.body.descripcion
        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE matplanta SET ? WHERE?', [planta,{codplanta : req.body.codplanta}], function(err,rows,fields){
            if(err)throw err;
            planta = rows;
            db.end();

        });
        res.redirect('/users/prima/planta');
    },

}