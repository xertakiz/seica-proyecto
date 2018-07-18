var mysql = require('mysql');



//materiales terminados
module.exports ={

    getPrima : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var terminados = null;
        db.query('SELECT * FROM matprima', function(err,rows, fields){
            if(err) throw err;

            prima = rows
            db.end();

            res.render('produccion/prima',{prima : prima, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },
}