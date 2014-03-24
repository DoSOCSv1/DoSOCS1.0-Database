//This is an update to an existing get

//************************************************************
// product_software
//************************************************************

// GET api/product_software/{id}
app.get('/api/product_software/:id', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }

        var sql = "SELECT s.* " +
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


//THE rest are new get requests.
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

// GET api/child_software
app.get('/api/child_software', function(req, res){
    pool.getConnection(function(err, connection) {
        if(err != null) {
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
			
				   "GROUP BY s.id," +
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
            // Release this connection
            connection.release();
        });

        console.log(query.sql);
    });
});

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