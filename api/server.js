var express = require('express');
var mysql = require('mysql');
var cs = require('./connectionSettings.js');
var app = express();

console.log("Will connect to database " + cs.database + " with user " + cs.user);

// Create a connection pool
var pool = mysql.createPool({
    database: cs.database,
    user : cs.user,
    password : cs.password,
    socketPath: cs.socketPath
});

//************************************************************
// spdx
// ***********************************************************

// Enable CORS
//
// This is done in order to have a whitelist for the requestor
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// GET api/spdx
//
// This method returns an spdx document in json format
app.get('/api/spdx', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = 
	    	"SELECT " +
	        	"spdx_docs.id, spdx_version, data_license, document_comment, creator, creators.created_at, creator_comments, package_name, package_version, package_download_location, package_summary, package_file_name, package_supplier, package_originator, package_checksum, package_verification_code, package_description,package_copyright_text, package_license_declared, package_license_concluded, package_license_info_from_files" +
	    	" FROM " +
	        	"spdx_docs" +
	    	" LEFT JOIN " + 
	        	"creators" + 
	    	" ON " + 
	        	"spdx_docs.id = creators.spdx_doc_id" +
	    	" LEFT JOIN " +
	        	"doc_file_package_associations" +
	    	" ON " +
	        	"spdx_docs.id = doc_file_package_associations.spdx_doc_id" +
	    	" LEFT JOIN " + 
	        	"packages" +
	    	" ON " +
	        	"doc_file_package_associations.package_id = packages.id" +
		" GROUP BY " +
		    	"spdx_docs.id";

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release this connection
            connection.release();
        });

        console.log(query.sql);
    });
});

// GET api/spdx/{id}
//
// This method returns an spdx document in json format
app.get('/api/spdx/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = 
	    	"SELECT " +
	        	"spdx_docs.id, packages.id as package_id, spdx_version, data_license, document_comment, creator, creators.created_at, creator_comments, package_name, package_version, package_download_location, package_summary, package_file_name, package_supplier, package_originator, package_checksum, package_verification_code, package_description,package_copyright_text, package_license_declared, package_license_concluded, package_license_info_from_files" +
	    	" FROM " +
	        	"spdx_docs" +
	    	" LEFT JOIN " + 
	        	"creators" + 
	    	" ON " + 
	        	"spdx_docs.id = creators.spdx_doc_id" +
	    	" LEFT JOIN " +
	        	"doc_file_package_associations" +
	    	" ON " +
	        	"spdx_docs.id = doc_file_package_associations.spdx_doc_id" +
	    	" LEFT JOIN " + 
	        	"packages" +
	    	" ON " +
	        	"doc_file_package_associations.package_id = packages.id" +
		" WHERE " +
		    	"spdx_docs.id = " + connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows[0]);
            }
            // Release this connection
            connection.release();
        });

        console.log(query.sql);
    });
});

app.put('/api/spdx/:id', function(req, res) {
    console.log(req.query);
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
	var sql = "UPDATE " +
                "spdx_docs " +
            "SET " +
                "document_comment=" + connection.escape(req.query.document_comment) +  
            " WHERE "+
                "id=" + connection.escape(req.params.id); 

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send("success");
            }
        });

	sql = "UPDATE " +
                "packages " +
            "SET " +
                "package_license_concluded=" + connection.escape(req.query.licenseconcluded) + 
            " WHERE "+
                "id=" + connection.escape(req.query.package_id); 

        var query2 = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send("success");
            }
        });

        sql = "INSERT INTO " +
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

        var query3 = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send("success");
            }
            // Release this connection
            connection.release();
        });
    });
    
});
app.listen('3000');
console.log('Listening for connections on 3000');

