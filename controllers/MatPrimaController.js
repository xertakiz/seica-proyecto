var mysql = require('mysql');



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