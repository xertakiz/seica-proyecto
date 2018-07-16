var mysql = require('mysql');
var dateFormat = require('dateformat');

// Controladores de Produccion
module.exports ={
    getProduccion : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion', function(err,rows, fields){
            if(err) throw err;

            produccion = rows
            db.end();

            res.render('produccion/produccion',{produccion : produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    getNuevoProduccion: function(req,res,next){
        res.render('produccion/NuevoProduccion',{isAuthenticated : req.isAuthenticated(),
        user : req.user});
    },
    postNuevoProduccion: function(req,res,next){
/*
///// aqui tratando de hacer que los select funcionen pero nada

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var color = null;
        db.query('SELECT color FROM matprima WHERE codmaterial = ?',codmaterial, function(err,rows,fields){
            if(err)throw err;
            color = rows;
            db.end();
            
            res.render('produccion/ModificaProduccion', {color: color, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
       
 */      
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');
        
        var fechacort;
        var cort = req.body.cortada;
            if(cort == 1){
                fechacort = fecha

            }
            else{
            fechacort= ''
            }

        var fechamarca;
        var marc = req.body.marcada
            if(marc == 1){

                fechamarca = fecha
            }
            else{
            fechamarca= ''
            }

        var fechacost;
        var cost = req.body.costura;
            if(cost == 1){

                fechacost = fecha
            }
            else{
            fechacost= ''
            }

        var fechamon;
        var mont = req.body.montura;
            if(mont == 1){

                fechamon = fecha
            }
            else{
            fechamon= ''
            }

        var fechasole;
        var sole = req.body.soleteada;
            if(sole == 1){

                fechasole = fecha
            }
            else{
            fechasole= ''
            }

        var fechaenca;
        var enca = req.body.encajada;
            if(enca == 1){

                fechaenca = fecha
            }
            else{
            fechaenca= ''
            }

        var fechacomp;
        var comp = req.body.completado;
            if(comp == 1){

                fechacomp = fecha
            }
            else{
            fechacomp= ''
            }

        var status;

        if(cort  == 1){
            status = 'CORTADO'
        }
        else{
            status = 'CREADO'
        }
        if(cort & marc  == 1){
            status = 'MARCADO'
        }
        if(cort & marc & cost == 1){
            status = 'COSTUREADO'
        }
        if(cort & marc & cost & mont == 1){
            status = 'MONTADO'
        }
        if(cort & marc & cost & mont & sole == 1){
            status = 'SOLETEADO'
        }
        if(cort & marc & cost & mont & sole & enca == 1){
            status = 'COMPLETADO'
        }

        var produccion = {
            ticketpro : req.body.ticketpro,
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            fechacrea : fecha,
            color1 : req.body.color1,
            color2 : req.body.color2,
            color3 : req.body.color3,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente,
            status: status,
            
            cortada: req.body.cortada,
            fechacort: fechacort,
            marcada: req.body.marcada,
            fechamarca: fechamarca,
            costura: req.body.costura,
            fechacost: fechacost,
            montura: req.body.montura,
            fechamon: fechamon,
            soleteada: req.body.soleteada,
            fechasole: fechasole,
            encajada: req.body.encajada,
            fechaenca: fechaenca,
            completado: req.body.completado,
            fechacomp: fechacomp,
        }
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO produccion SET?', produccion, function(err,rows,fields){
            if(err) throw err;
        });
        res.render('produccion/NuevoProduccion', {info : 'Producto creado correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});

    },
    EliminarProduccion : function(req, res, next){			
        var ticketpro = req.body.ticketpro;
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var respuesta={res:false};
        db.query('DELETE FROM produccion WHERE ticketpro = ?',ticketpro, function(err,rows,fields){
            if(err)throw err; 
            db.end();
            respuesta.res=true;
            res.json(respuesta);
         });
    },
    getModificarProduccion : function(req,res,next){
        var ticketpro = req.params.ticketpro
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion WHERE ticketpro = ?',ticketpro, function(err,rows,fields){
            if(err)throw err;
            produccion = rows;
            db.end();

            res.render('produccion/ModificaProduccion', {produccion: produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },
    postModificarProduccion :function(req,res,next){
        var produccion = {
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            color1 : req.body.color1,
            color2 : req.body.color2,
            color3 : req.body.color3,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente
        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE produccion SET ? WHERE?', [produccion,{ticketpro : req.body.ticketpro}], function(err,rows,fields){
            if(err)throw err;
            produccion = rows;
            db.end();

        });
        res.redirect('/users/produccion');
    },
    getModificarStatus : function(req,res,next){
        var ticketpro = req.params.ticketpro
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion WHERE ticketpro = ?',ticketpro, function(err,rows,fields){
            if(err)throw err;
            produccion = rows;
            db.end();

            res.render('produccion/ModificaStatus', {produccion: produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });
    },
    postModificarStatus :function(req,res,next){
        var produccion = {
            fechacrea : req.body.fechacrea,

        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE produccion SET ? WHERE?', [produccion,{ticketpro : req.body.ticketpro}], function(err,rows,fields){
            if(err)throw err;
            produccion = rows;
            db.end();

        });
        res.redirect('/users/produccion');
    }
}