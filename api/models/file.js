var mysql = require('mysql'),
    cs    = require('../connectionSettings.js');
    
var filesql = "SELECT DISTINCT " + 
              "package_files.*, doc_file_package_associations.package_id " + 
              "FROM " +
              "package_files " +
              "INNER JOIN " +
              "doc_file_package_associations " +
              "ON " +
              "package_files.id = doc_file_package_associations.package_file_id";

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
            res.end('Error connecting to mysql:\n' + err);
        }
        
        var sql = filesql;
        
        // query string parameters
        if (req.query.packageid) {
            sql += " where package_id = " 
                    + connection.escape(req.query.packageid);
        }

        connection.query(sql, function(err, rows){
            if (err !== null) {
                res.end("Query error:\n" + err + "\nQuery:\n" + sql);
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
            res.end('Error connecting to mysql:\n' + err);
        }

        var sql = filesql + " WHERE package_files.id = "
                          + connection.escape(req.params.id);

        connection.query(sql, function(err, rows){
            if (err !== null) {
                res.end("Query error:\n" + err + "\nQuery:\n" + sql);
            } else {
                res.send(rows[0]);
            }
            // Release this connection
            connection.release();
        });
    });
}