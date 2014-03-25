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
    socketPath: '/var/run/mysqld/mysqld.sock'
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
                    "document_comment='" + connection.escape(req.query.document_comment) + "'" + 
                  "WHERE "+
                    "id=" + connection.escape(req.params.id); 
        var query = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send("success");
            }
        });
	    var package_id = -1;
        sql = "SELECT package_id " +
              "FROM " +
                    "doc_file_package_associations" + 
              "WHERE "+
                    "spdx_doc_id=" + connection.escape(req.params.id); 
        var query1 = connection.query(sql, function(err, rows){
            if (err != null) {
                res.end("Query error:" + err);
            } else {
                console.log(rows[0]);
                package_id = rows[0];
                res.send("success");
            }
        });

        if(package_id >= 0){
	        sql = "UPDATE " +
                        "packages " +
                  "SET " +
                        "package_license_concluded='" + connection.escape(req.query.licenseconcluded) + "'" + 
                  "WHERE "+
                        "id=" + package_id; 
            var query2 = connection.query(sql, function(err, rows){
                if (err != null) {
                    res.end("Query error:" + err);
                } else {
                    res.send("success");
                }
                // Release this connection
                connection.release();
            });
        }
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

// GET api/product_software/{id}
app.get('/api/product_software/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SELECT DISTINCT s.* " +
                          "FROM SPDX.product_software AS ps " +
                                    "LEFT OUTER JOIN SPDX.software AS s ON ps.software_id = s.id " +
                          "WHERE ps.product_id = " + connection.escape(req.params.id);

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
// child products
//************************************************************

// GET api/child_products
app.get('/api/child_products', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.products where parent_product_id is not null";

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

// GET api/child_products/{id}
app.get('/api/child_products/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "select * from SPDX.products where parent_product_id = " +
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
// child software
//************************************************************

// GET api/child_software/{id}
app.get('/api/child_software/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SELECT s.id AS software_id," +
                                              "s.software_name," +
                                                  "s.software_version," +
                                                  "s.software_description," +
                                                  "s.created_at," +
                                                  "s.updated_at," +
                                                  "p.id AS product_id," +
                                                  "p.product_name " +

                                    "FROM products AS p " +
                                                 "INNER JOIN product_software AS ps ON p.id = ps.product_id " +
                                                 "LEFT OUTER JOIN software AS s ON ps.software_id = s.id " +
                                                 "LEFT OUTER JOIN products AS pp ON p.parent_product_id = pp.id " +

                                        "WHERE p.parent_product_id = " + connection.escape(req.params.id) +

                                   " GROUP BY s.id," +
                                                      "s.software_name," +
                                                          "s.software_version," +
                                                          "s.created_at," +
                                                          "s.updated_at";

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
// avalible packages
//************************************************************

// GET api/child_software/{id}
app.get('/api/avalible_packages/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SELECT  p.id," + 
        			      "p.package_name," +
        			      "p.package_version " +
        			      
        		   "FROM packages AS p " +
        		   "WHERE p.id NOT IN (SELECT package_id " +
        		   					   "FROM product_software " +
        		   					    "WHERE product_id = " + connection.escape(req.params.id) + ")";

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
// software_packages
//************************************************************

// GET api/software_packages/{id}
app.get('/api/software_packages/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SELECT pkg.id," +
                                                 "pkg.package_name," +
                                                 "pkg.package_home_page," +
                                                 "pkg.package_version," +
                                                 "pkg.created_at," +
                                                 "pkg.updated_at " +

                                    "FROM product_software AS ps " +
                                                 "LEFT OUTER JOIN packages AS pkg ON ps.package_id = pkg.id " +


                                        "WHERE ps.software_id = " + connection.escape(req.params.id);

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

// GET api/software auto inc
app.get('/api/software_auto', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SHOW TABLE STATUS LIKE 'software'";

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
//POST functions

app.post('/api/insert_products',function(req,res) {
	pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
    
        var sql = "INSERT INTO products (product_name,product_type,product_description,parent_product_id,created_at,updated_at) " + 
				   "VALUES ('" + req.query.product_name + "','" + req.query.product_type + "','" + req.query.product_description + "'," + req.query.parent_product_id + ",NOW(),NOW())";	   
		var query = connection.query(sql, function(err, rows) {
			if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send('success');
            }
            // Release this connection
            connection.release();
        });
        console.log('success');
    });
});

app.post('/api/insert_software',function(req,res) {
	pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
        
        var sql = "INSERT INTO software (software_name,software_version,software_description,created_at,updated_at) " +
				  "VALUES ('" + req.query.software_name + "','" + req.query.software_version + "','" + req.query.software_description + "',NOW(),NOW())"; 
        
		var query = connection.query(sql, function(err, rows) {
			if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release this connection
            connection.release();
        });
        console.log('success');
    });
});

app.post('/api/insert_product_software',function(req,res) {
	pool.getConnection(function(err, connection) {
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
        var sql = "INSERT INTO product_software (product_id,software_id,package_id,created_at,updated_at) " +
				  "VALUES (" + req.query.product_id + "," + req.query.software_id + "," + req.query.package_id +",NOW(),NOW())";
        
		var query = connection.query(sql, function(err, rows) {
			if (err != null) {
                res.end("Query error:" + err);
            } else {
                res.send(rows);
            }
            // Release this connection
            connection.release();
        });
        console.log('success');
    });
}); 
app.listen('3000');
console.log('Listening for connections on 3000');

