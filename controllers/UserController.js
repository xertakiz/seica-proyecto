var mysql = require('mysql');
var bcrypt = require('bcryptjs')

module.exports ={
    
    

    getSignIn: function(req,res,next){
        return res.render('users/signin',{authmessage: req.flash('authmessage')});

    },

    getSignUp : function(req, res, next){
        return res.render('users/signup', {message: req.flash('info'),isAuthenticated : req.isAuthenticated(),
        user : req.user});     
	},

    postSignUp: function(req,res,next){
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);

        var user ={
            usuario : req.body.usuario,
            password : password,
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            cedula : req.body.cedula,
            email : req.body.email,
            telefono : req.body.telefono
        };

        var config = require('.././database/config');

        var db = mysql.createConnection(config);

        db.connect();
        db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
            if(err) throw err;
            db.end();

        });
        req.flash('info', 'Se ha Registrado Correctamente');
        return res.redirect('/users/signup');
    },

    logout : function(req, res, next){
        req.logout();
        res.redirect('/auth/signin');
    },

    getUserPanel : function(req,res,next){
        res.render('users/panel',{
            isAuthenticated : req.isAuthenticated(),
            user : req.user
        });
    }

};