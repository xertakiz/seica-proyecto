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
var produccio = null;
db.query('SELECT * FROM `produccion` ORDER BY `produccion`.`ticketpro` DESC', function(err,rows, fields){
    if(err) throw err;

    produccio = rows
    db.end();
});

// Controladores de Produccion
module.exports ={
    getProduccion : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        var produccion = null;
        db.query('SELECT * FROM `produccion` ORDER BY `produccion`.`ticketpro` DESC', function(err,rows, fields){
            if(err) throw err;

            produccion = rows
            db.end();

            res.render('produccion/produccion',{produccion : produccion, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    postBuscarProduccion: function (req,res, ticket){

        var codigo = req.body.ticket;
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        var produccion = null;
        db.query('SELECT * FROM produccion WHERE ticketpro = ?', codigo, function (err, rows, fields) {
            if (err) throw err;
            produccion = rows;
            db.end();

            if (produccion.length > 0) {
                res.render('produccion/BuscarProduccion', {produccion: produccion, isAuthenticated : req.isAuthenticated(),
                    user : req.user});

            }
            else {
                res.render('produccion/produccion',{info:'Ticket no Encontrado',produccion : produccio, isAuthenticated : req.isAuthenticated(),
                user : req.user})
            }
        }); 
    },

    getNuevoProduccion: function(req,res,next){

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        color = null;
        db.query('SELECT color FROM matprima', function(err,rows, fields){
            
            if(err) throw err;

            color = rows
            
            db.end();

            res.render('produccion/NuevoProduccion',{isAuthenticated : req.isAuthenticated(),
                user : req.user,color});
        });
    },
    postNuevoProduccion: function(req,res,next){
      
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');
        
        var fechacort;
        var cort = req.body.cortada;

        var fechamarca;
        var marc = req.body.marcada

        var fechacost;
        var cost = req.body.costura;

        var fechamon;
        var mont = req.body.montura;

        var fechasole;
        var sole = req.body.soleteada;

        var fechaenca;
        var enca = req.body.encajada;

        var fechacomp;
        var comp = req.body.completado;


        var status;
        var corta;
        var marca;
        var costu;
        var montu;
        var solete;
        var encaja;
        var comple;

        if(cort == 1){
            status = 'CORTADO'
            corta = 1;
            if(corta == 1){
                fechacort = fecha

            }
            else{
            fechacort= ''
            }
        }
        else{
            status = 'CREADO'
        }
        if(cort & marc  == 1){
            status = 'MARCADO'
            marca = 1;
            if(marca == 1){

                fechamarca = fecha
            }
            else{
            fechamarca= ''
            }
        }
        if(cort & marc & cost == 1){
            status = 'COSTUREADO'
            costu = 1;
            if(costu == 1){

                fechacost = fecha
            }
            else{
            fechacost= ''
            }
        }
        if(cort & marc & cost & mont == 1){
            status = 'MONTADO'
            montu = 1;
            if(montu == 1){

                fechamon = fecha
            }
            else{
            fechamon= ''
            }
        }
        if(cort & marc & cost & mont & sole == 1){
            status = 'SOLETEADO'
            solete = 1;
            if(solete == 1){

                fechasole = fecha
            }
            else{
            fechasole= ''
            }
        }
        if(cort & marc & cost & mont & sole & enca == 1){
            status = 'COMPLETADO'
            encaja = 1;
            comple = 1;
            if(encaja == 1){

                fechaenca = fecha
            }
            else{
            fechaenca= ''
            }
            if(comple == 1){

                fechacomp = fecha
            }
            else{
            fechacomp= ''
            }
        }

        var produccion = {
            ticketpro : req.body.ticketpro,
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            fechacrea : fecha,
            color1 : req.body.color1,
            color2 : req.body.color2,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente,
            status: status,
            
            cortada: corta,
            fechacort: fechacort,
            marcada: marca,
            fechamarca: fechamarca,
            costura: costu,
            fechacost: fechacost,
            montura: montu,
            fechamon: fechamon,
            soleteada: solete,
            fechasole: fechasole,
            encajada: encaja,
            fechaenca: fechaenca,
            completado: comple,
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
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');
        
        var fechacort;
        var cort = req.body.cortada;

        var fechamarca;
        var marc = req.body.marcada

        var fechacost;
        var cost = req.body.costura;

            var fechamon;
            var mont = req.body.montura;

            var fechasole;
            var sole = req.body.soleteada;

            var fechaenca;
            var enca = req.body.encajada;

            var fechacomp;
            var comp = req.body.completado;
                if(comp == 1){
                    
                    fechacomp = fecha
                }
                else{
                fechacomp= ''
                }
            
                if(cort  == 1){
                    status = 'CORTADO'
                    corta = 1;
                }
                else{
                    status = 'CREADO'
                }
                if(cort & marc  == 1){
                    status = 'MARCADO'
                    marca = 1;
                }
                if(cort & marc & cost == 1){
                    status = 'COSTUREADO'
                    costu = 1;
                }
                if(cort & marc & cost & mont == 1){
                    status = 'MONTADO'
                    montu = 1;
                }
                if(cort & marc & cost & mont & sole == 1){
                    status = 'SOLETEADO'
                    solete = 1;
                }
                if(cort & marc & cost & mont & sole & enca == 1){
                    status = 'COMPLETADO'
                    encaja = 1;
                    comple = 1;
                }
        
    
        
        var produccion = {
            ticketpro : req.body.ticketpro,
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            fechacrea : req.body.fechacrea,
            color1 : req.body.color1,
            color2 : req.body.color2,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente,
            status: status,
            
            cortada: cort,
            fechacort: fechacort,
            marcada: marc,
            fechamarca: fechamarca,
            costura: cost,
            fechacost: fechacost,
            montura: mont,
            fechamon: fechamon,
            soleteada: sole,
            fechasole: fechasole,
            encajada: enca,
            fechaenca: fechaenca,
            completado: comp,
            fechacomp: fechacomp,
            
        }

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
      
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');
        
        var fechacort;
        var cort = req.body.cortada;

        var fechamarca;
        var marc = req.body.marcada

        var fechacost;
        var cost = req.body.costura;

        var fechamon;
        var mont = req.body.montura;

        var fechasole;
        var sole = req.body.soleteada;

        var fechaenca;
        var enca = req.body.encajada;

        var fechacomp;
        var comp = req.body.completado;


        var status;
        var corta;
        var marca;
        var costu;
        var montu;
        var solete;
        var encaja;
        var comple;

        if(cort == 1){
            status = 'CORTADO'
            corta = 1;
            if(corta == 1){
                if(req.body.fechacortada == produccion[0].fechacort){
                    fechacort= req.body.fechacortada
                }
                else{
                    fechacort= fecha
                }
            }
            
        }
        else{
            status = 'CREADO'
        }
        if(cort & marc  == 1){
            status = 'MARCADO'
            marca = 1;
            if(marca == 1){
                if(req.body.fechamarcada == produccion[0].fechamarca){
                    fechamarca= req.body.fechamarcada
                }
                else{
                    fechamarca= fecha
                }
            }
        }
        if(cort & marc & cost == 1){
            status = 'COSTUREADO'
            costu = 1;
            if(costu == 1){

                fechacost = fecha
            }
            else{
            fechacost= ''
            }
        }
        if(cort & marc & cost & mont == 1){
            status = 'MONTADO'
            montu = 1;
            if(montu == 1){

                fechamon = fecha
            }
            else{
            fechamon= ''
            }
        }
        if(cort & marc & cost & mont & sole == 1){
            status = 'SOLETEADO'
            solete = 1;
            if(solete == 1){

                fechasole = fecha
            }
            else{
            fechasole= ''
            }
        }
        if(cort & marc & cost & mont & sole & enca == 1){
            status = 'COMPLETADO'
            encaja = 1;
            comple = 1;
            if(encaja == 1){

                fechaenca = fecha
            }
            else{
            fechaenca= ''
            }
            if(comple == 1){

                fechacomp = fecha
            }
            else{
            fechacomp= ''
            }
        }
        
    
        
        var produccion = {
            ticketpro : req.body.ticketpro,
            modelo : req.body.modelo,
            tcalzado : req.body.tcalzado,
            fechacrea : req.body.fechacrea,
            color1 : req.body.color1,
            color2 : req.body.color2,
            pares: req.body.pares,
            notas: req.body.notas,
            cliente: req.body.cliente,
            status: status,
            
            cortada: cort,
            fechacort: fechacort,
            marcada: marc,
            fechamarca: fechamarca,
            costura: cost,
            fechacost: fechacost,
            montura: mont,
            fechamon: fechamon,
            soleteada: sole,
            fechasole: fechasole,
            encajada: enca,
            fechaenca: fechaenca,
            completado: comp,
            fechacomp: fechacomp,
            
        }

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

