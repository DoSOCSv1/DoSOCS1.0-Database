var express    = require('express'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    app        = express(),
    
    // models
    doc        = require('./models/doc.js'),
    file       = require('./models/file.js'),
    
    // interaction with do_spdx
    scan       = require('./do_spdx/scan.js');
    
app.use(morgan('dev'));
app.use(bodyParser());

// Enable CORS
//
// This is done in order to have a whitelist for the requestor
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// scans
app.post('/api/scan', scan.test); // POST api/scan

// spdx documents
app.get('/api/spdx', doc.getAll); // GET api/spdx
app.get('/api/spdx/:id', doc.getById); // GET api/spdx/{id}
app.put('/api/spdx/:id', doc.update);  // PUT api/spdx/{id}

// files
app.get('/api/files', file.getAll); // GET api/files
app.get('/api/files/:id', file.getById); // GET api/file/{id}

app.listen('3000');
console.log('Listening for connections on 3000');

