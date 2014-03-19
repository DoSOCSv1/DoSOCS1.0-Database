var express = require('express');
var mysql = require('mysql');
var cs = require('./connectionSettings.js');
var app = express();

console.log("Will connect to database " + cs.database + " with user " + cs.user);

// Create a connection pool
var pool = mysql.createPool({
    database: cs.database,
    user : cs.user,
    password : cs.password 
});

//************************************************************
// spdx
// ***********************************************************

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
	        	"spdx_version, data_license, document_comment, creator, creators.created_at, creator_comments, package_name, package_version, package_download_location, package_summary, package_file_name, package_supplier, package_originator, package_checksum, package_verification_code, package_description,package_copyright_text, package_license_declared, package_license_concluded, package_license_info_from_files" +
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

//************************************************************
// spdx_docs
//************************************************************

// GET api/spdx_docs
app.get('/api/spdxdocs', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.spdx_docs";

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

// GET api/spdxdocs/{id}
app.get('/api/spdxdocs/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.spdx_docs where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// creators
//************************************************************

// GET api/creators
app.get('/api/creators', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.creators";

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

// GET api/creators/{id}
app.get('/api/creators/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.creators where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// license
//************************************************************

// GET api/license
app.get('/api/license', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.license";

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

// GET api/license/{id}
app.get('/api/license/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.license where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// licensings
//************************************************************

// GET api/licensings
app.get('/api/licensings', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.licensings";

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

// GET api/licensings/{id}
app.get('/api/licensings/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.licensings where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// package_files
//************************************************************

// GET api/package_files
app.get('/api/package_files', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.package_files";

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

// GET api/package_files/{id}
app.get('/api/package_files/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.package_files where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// packages
//************************************************************

// GET api/packages
app.get('/api/packages', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.packages";

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

// GET api/packages/{id}
app.get('/api/packages/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.packages where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// product_software
//************************************************************

// GET api/product_software
app.get('/api/product_software', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.product_software";

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

// GET api/product_software/{id}
app.get('/api/product_software/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.product_software where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// products
//************************************************************

// GET api/products
app.get('/api/products', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.products";

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

// GET api/products/{id}
app.get('/api/products/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.products where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// reviewers
//************************************************************

// GET api/reviewers
app.get('/api/reviewers', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.reviewers";

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

// GET api/reviewers/{id}
app.get('/api/reviewers/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.reviewers where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

//************************************************************
// software
//************************************************************

// GET api/software
app.get('/api/software', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.software";

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

// GET api/software/{id}
app.get('/api/software/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.software where id = " + 
                connection.escape(req.params.id);

        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release the connection
            connection.release();
        });

        console.log(query.sql);
    });
});

app.listen('3000');
console.log('Listening for connections on 3000');

