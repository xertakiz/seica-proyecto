var mysql = require('mysql');

//clientes controller

module.exports ={

    getClientes : function(req,res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var clientes = null;
        db.query('SELECT * FROM clientes', function(err,rows, fields){
            if(err) throw err;

            clientes = rows
            db.end();

            res.render('clientes/clientes',{clientes : clientes, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
    getNuevoCliente: function(req,res,next){
        res.render('clientes/NuevoCliente',{isAuthenticated : req.isAuthenticated(),
        user : req.user});
    },
    postNuevoCliente: function(req,res,next){
       
        var cliente = {
            codcliente : req.body.codcliente,
            nomcliente : req.body.nombre,
            ciucliente : req.body.ciudad,
            estcliente : req.body.estado,
            telefono : req.body.telefono
        }
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('INSERT INTO clientes SET?', cliente, function(err,rows,fields){
            if(err) throw err;
        });
        res.render('clientes/NuevoCliente', {info : 'Cliente Creado Correctamente', isAuthenticated : req.isAuthenticated(),
            user : req.user});
    },    
    EliminarCliente : function(req, res, next){			
        var codcliente = req.body.codcliente;
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var respuesta={res:false};
        db.query('DELETE FROM clientes WHERE codcliente = ?',codcliente, function(err,rows,fields){
            if(err)throw err; 
            db.end();
            respuesta.res=true;
            res.json(respuesta);
         });
    },
    getModificarCliente : function(req,res,next){
        var codcliente = req.params.codcliente
    
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();

        var cliente = null;
        db.query('SELECT * FROM clientes WHERE codcliente = ?',codcliente, function(err,rows,fields){
            if(err)throw err;
            cliente = rows;
            db.end();

            res.render('clientes/ModificarClientes', {cliente: cliente, isAuthenticated : req.isAuthenticated(),
                user : req.user});
        });

    },
    postModificarCliente :function(req,res,next){
        var cliente = {
            nomcliente : req.body.nombre,
            ciucliente : req.body.ciudad,
            estcliente : req.body.estado,
            telefono : req.body.telefono
        };

        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        db.connect();
        
        db.query('UPDATE clientes SET ? WHERE?', [cliente,{codcliente : req.body.codcliente}], function(err,rows,fields){
            if(err)throw err;
            cliente = rows;
            db.end();

        });
        res.redirect('/users/clientes');
    


    }

}