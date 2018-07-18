var mysql = require('mysql');
var dateFormat = require('dateformat');

// Controladores de Produccion
module.exports ={
    getPublicPrima : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var prima = null;
        db.query('SELECT * FROM matprima', function(err,rows, fields){
            if(err) throw err;

            prima = rows
            db.end();

            res.render('publicas/Prima',{prima : prima, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    getPublicProduccion : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion', function(err,rows, fields){
            if(err) throw err;

            produccion = rows
            db.end();

            res.render('publicas/Produccion',{produccion : produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    getPublicStatus : function(req,res,next){
        var ticketpro = req.params.ticketpro
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion WHERE ticketpro = ?',ticketpro, function(err,rows,fields){
            if(err)throw err;
            produccion = rows;
            db.end();

            res.render('publicas/Status', {produccion: produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },



}