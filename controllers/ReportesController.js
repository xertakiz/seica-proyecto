var mysql = require('mysql');
var dateFormat = require('dateformat');


// Controladores de Reportes de Produccion
module.exports ={
    getReportes : function(req, res, next){
        res.render('reportes/reportes',{ isAuthenticated : req.isAuthenticated(),
            user : req.user})
    },
    getReportesDiaCort : function(req, res, next){
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd');

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var produccion = null;
        db.query('SELECT * FROM produccion WHERE fechacort  = ?', fecha, function (err, rows, fields) {
            if (err) throw err;
            produccion = rows;
            db.end();



            res.render('reportes/ReportesDia',{produccion : produccion, fecha, isAuthenticated : req.isAuthenticated(),
                user : req.user})
        });
    },

}
