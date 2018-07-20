var mysql = require('mysql');
var dateFormat = require('dateformat');

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
        
        /*cliente = null;
        db.query('SELECT cliente FROM clientes', function(err,rows, fields){
            console.log(nomcliente)
            if(err) throw err;
            
            nomcliente = rows
            db.end();

            res.render('produccion/NuevoTerminado',{isAuthenticated : req.isAuthenticated(),
                user : req.user,nomcliente});
        });
        */

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

}