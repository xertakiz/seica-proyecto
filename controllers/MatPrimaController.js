var mysql = require('mysql');



//material materia prima
module.exports ={

    getPrima : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var prima = null;
        db.query('SELECT * FROM matprima', function(err,rows, fields){
            if(err) throw err;

            prima = rows
            db.end();

            res.render('produccion/prima',{prima : prima, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },

    getNuevoPrima: function(req,res,next){
        res.render('produccion/NuevoPrima',{isAuthenticated : req.isAuthenticated(),
        user : req.user});
    },
    postNuevoPrima: function(req,res,next){
        
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
        res.render('produccion/NuevoPrima', {info : 'Producto creado correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});
    },
        
    EliminarPrima : function(req, res, next){			
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

    getModificarPrima : function(req,res,next){
        var codmaterial = req.params.codmaterial
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var prima = null;
        db.query('SELECT * FROM matprima WHERE codmaterial = ?',codmaterial, function(err,rows,fields){
            if(err)throw err;
            prima = rows;
            db.end();

            res.render('produccion/ModificaPrima', {prima: prima, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },

    postModificarPrima :function(req,res,next){
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
        res.redirect('/users/prima');
    }
    
}