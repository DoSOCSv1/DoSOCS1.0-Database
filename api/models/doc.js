var mysql = require('mysql'),
    cs    = require('../connectionSettings.js');
    
var docsql = "SELECT DISTINCT " +
                 "spdx_docs.id, spdx_version, data_license, document_comment, creator, creators.created_at, creator_comments, package_name, package_version, package_download_location, package_summary, package_file_name, package_supplier, package_originator, package_checksum, package_verification_code, package_description,package_copyright_text, package_license_declared, package_license_concluded, package_license_info_from_files" +
             " FROM " +
                 "spdx_docs" +
             " INNER JOIN " + 
                 "creators" + 
             " ON " + 
                 "spdx_docs.id = creators.spdx_doc_id" +
             " INNER JOIN " +
                 "doc_file_package_associations" +
             " ON " +
                 "spdx_docs.id = doc_file_package_associations.spdx_doc_id" +
             " INNER JOIN " + 
                 "packages" +
             " ON " +
                 "doc_file_package_associations.package_id = packages.id";

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

        var sql = docsql + " GROUP BY spdx_docs.id";

        connection.query(sql, function(err, rows){
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

        var sql = docsql + " WHERE spdx_docs.id = "
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

exports.update = function (req, res) {
    pool.getConnection(function(err, connection) {
        if(err !== null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
        
    	var docs = "UPDATE spdx_docs " +
                  "SET document_comment=" + connection.escape(req.body.document_comment) +  
                  " WHERE id=" + connection.escape(req.body.id); 

        connection.query(docs, function(err, rows){
            if (err !== null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows[0]);
            }
        });

	    var packages = "UPDATE packages " +
          "SET package_license_concluded=" + connection.escape(req.body.package_license_concluded) + 
          " WHERE id=" + connection.escape(req.body.id); 

        connection.query(packages, function(err, rows){
            if (err !== null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows[0]);
            }
        });

        var reviewers = "INSERT INTO " +
                "spdx_edit_review " +
                "(edit_review_date," +
                " edited_document_comment," +
                " edited_package_license_concluded," +
                " edit_review_comment," +
                " spdx_doc_id," +
                " edit_reviewer," +
                " created_at," +
                " updated_at)" +
            "VALUES (" +
                "NOW(), " +
                connection.escape(req.query.document_comment) + ", " +
                connection.escape(req.query.licenseconcluded) + ", " +
                "Not Provided, " +
                connection.escape(req.params.id) + ", " +
                connection.escape(req.query.editor) + ", " +
                "NOW(), " +
                "NULL);";

        connection.query(reviewers, function(err, rows){
            if (err !== null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows[0]);
            }
            
            connection.release();
        });
    });
}
