var mysql = require('mysql'),
    cs    = require('../connectionSettings.js');
    
var packsql = "select * from packages";

// Create a connection pool
var pool = mysql.createPool({
    database: cs.database,
    user : cs.user,
    password : cs.password,
    socketPath: cs.socketPath
});

exports.getAll = function (req, res) {
    pool.getConnection(function(err, connection) {
        if(err !== null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        connection.query(packsql, function(err, rows){
            if (err !== null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release this connection
            connection.release();
        });
    });
}

exports.getById = function (req, res) {
    pool.getConnection(function(err, connection) {
        if(err !== null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = packsql + " WHERE packages.id = "
                         + connection.escape(req.params.id);

        connection.query(sql, function(err, rows){
            if (err !== null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows[0]);
            }
            // Release this connection
            connection.release();
        });
    });
}