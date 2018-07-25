var mysql = require('mysql');
var dateFormat = require('dateformat');

function clientebd(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var cliente=null;
    db.query('SELECT cliente FROM clientes', function (err, rows, fields) {
                if (err) throw err;
                cliente = rows
                db.end();    
                return cliente
    });
}


var config = require('.././database/config');
var db = mysql.createConnection(config);
db.connect();
var terminado = null;
        db.query('SELECT * FROM `terminado` ORDER BY `terminado`.`codterminado` DESC', function(err,rows, fields){
            if(err) throw err;
            terminado = rows
            db.end();
});
//materiales terminados
module.exports ={

    getTerminado : function(req, res, next){
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        var terminados = null;
        db.query('SELECT * FROM `terminado` ORDER BY `terminado`.`codterminado` DESC', function(err,rows, fields){
            if(err) throw err;
            terminados = rows
            db.end();

            res.render('produccion/terminado/terminado',{terminados : terminados, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    postBuscarTerminado : function (req,res, ticket){

        var codigo = req.body.ticket;
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        var terminados = null;
        db.query('SELECT * FROM terminado WHERE ticketpro = ?', codigo, function (err, rows, fields) {
            if (err) throw err;
            terminados = rows;
            db.end();

            if (terminados.length > 0) {
                res.render('produccion/terminado/BuscarTerminado', {terminados: terminados, isAuthenticated : req.isAuthenticated(),
                    user : req.user});

            }
            else {
                res.render('produccion/terminado/terminado',{info:'Codigo no Encontrado',terminados: terminado, isAuthenticated : req.isAuthenticated(),
                user : req.user})
            }
        }); 
    },
    getNuevoTerminado: function(req,res,next){

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        color = null;
        db.query('SELECT color FROM matprima', function(err,rows, fields){
            
            if(err) throw err;

            color = rows
            
            db.end();
            res.render('produccion/terminado/NuevoTerminado',{isAuthenticated : req.isAuthenticated(),
                user : req.user,color});
        });
    },
    postNuevoTerminado: function(req,res,next){
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');

        var terminado = {
            codterminado : req.body.codterminado,
            ticketpro : req.body.ticketpro,
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            fechacomp : fecha,
            color1 : req.body.color1,
            color2 : req.body.color2,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente
        }
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO terminado SET?', terminado, function(err,rows,fields){
            if(err) throw err;
        });

        res.render('produccion/terminado/NuevoTerminado', {info : 'Producto Terminado creado correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});

    },
    EliminarTerminado : function(req, res, next){			
        var codterminado = req.body.codterminado;
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var respuesta={res:false};
        db.query('DELETE FROM terminado WHERE codterminado = ?',codterminado, function(err,rows,fields){
            if(err)throw err; 
            db.end();
            respuesta.res=true;
            res.json(respuesta);
         });
    },

    getModificarTerminado : function(req,res,next){
        var codterminado = req.params.codterminado
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var terminados = null;
        db.query('SELECT * FROM `terminado` ORDER BY `terminado`.`codterminado` DESC', function(err,rows, fields){
            if(err) throw err;
            terminados = rows
            db.end();

            res.render('produccion/terminado/ModificaTerminado', {terminados: terminados, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },
    postModificarTerminado :function(req,res,next){
        var terminados = {
            ticketpro : req.body.ticketpro,
            tcalzado : req.body.tcalzado,
            modelo : req.body.modelo,
            color1 : req.body.color1,
            color2 : req.body.color2,
            pares : req.body.pares,
            notas : req.body.notas,
            fechacomp : req.body.fechacomp,
            cliente : req.body.cliente
        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE terminado SET ? WHERE?', [terminados,{codterminado : req.body.codterminado}], function(err,rows,fields){
            if(err)throw err;
            terminados = rows;
            db.end();

        });
        res.redirect('/users/terminado');
    },

}