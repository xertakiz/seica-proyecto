var mysql = require('mysql');

var config = require('.././database/config');
var db = mysql.createConnection(config);
db.connect();
var prim = null;
db.query('SELECT * FROM matprima', function(err,rows, fields){
    if(err) throw err;
    prim = rows
    db.end();
});



//material materia prima
module.exports ={
    getPrima : function(req, res, next){

        res.render('produccion/prima/prima',{ isAuthenticated : req.isAuthenticated(),
            user : req.user})
    },

    getMaterial : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var prima = null;
        db.query('SELECT * FROM matprima', function(err,rows, fields){
            if(err) throw err;

            prima = rows
            db.end();

            res.render('produccion/prima/Material',{prima : prima, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    postBuscarMaterial: function (req,res, ticket){

        var codigo = req.body.ticket;
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        var prima = null;
        db.query('SELECT * FROM matprima WHERE codmaterial = ?', codigo, function (err, rows, fields) {
            if (err) throw err;
            prima = rows;
            db.end();

            if (prima.length > 0) {
                res.render('produccion/prima/BuscarMaterial', {prima: prima, isAuthenticated : req.isAuthenticated(),
                    user : req.user});

            }
            else {
                res.render('produccion/prima/Material',{info:'Codigo no Encontrado',prima: prim, isAuthenticated : req.isAuthenticated(),
                user : req.user})
            }
        }); 
    },

    getNuevoMaterial: function(req,res,next){
        res.render('produccion/prima/NuevoMaterial',{isAuthenticated : req.isAuthenticated(),
        user : req.user});
    },
    postNuevoMaterial: function(req,res,next){
        
        var prima = {
            codmaterial : req.body.codmaterial,
            nommaterial : req.body.nombre,
            color : req.body.color,
            existencia : req.body.metraje,
            descripcion : req.body.descripcion
        }
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO matprima SET?', prima, function(err,rows,fields){
            if(err) throw err;
        });
        res.render('produccion/prima/NuevoMaterial', {info : 'Producto creado correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});
    },
        
    EliminarMaterial : function(req, res, next){			
        var codmaterial = req.body.codmaterial;
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var respuesta={res:false};
        db.query('DELETE FROM matprima WHERE codmaterial = ?',codmaterial, function(err,rows,fields){
            if(err)throw err; 
            db.end();
            respuesta.res=true;
            res.json(respuesta);
         });
    },

    getModificarMaterial : function(req,res,next){
        var codmaterial = req.params.codmaterial
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var prima = null;
        db.query('SELECT * FROM matprima WHERE codmaterial = ?',codmaterial, function(err,rows,fields){
            if(err)throw err;
            prima = rows;
            db.end();

            res.render('produccion/prima/ModificaMaterial', {prima: prima, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },

    postModificarMaterial :function(req,res,next){
        var prima = {
            nommaterial : req.body.nombre,
            color : req.body.color,
            existencia : req.body.metraje,
            descripcion : req.body.descripcion
        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE matprima SET ? WHERE?', [prima,{codmaterial : req.body.codmaterial}], function(err,rows,fields){
            if(err)throw err;
            prima = rows;
            db.end();

        });
        res.redirect('/users/prima/material');
    },
}