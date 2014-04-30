var express    = require('express'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    app        = express(),
    
    // models
    doc        = require('./models/doc.js'),
    file       = require('./models/file.js'),
    pack       = require('./models/packages.js'),
    
    // interaction with do_spdx
    scan       = require('./do_spdx/scan.js');
    
app.use(morgan('dev'));
app.use(bodyParser());

// Enable CORS
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// scans
app.post('/api/scan', scan.upload); // POST api/scan
app.get('/testupload', scan.testUpload); // GET /testupload

// spdx documents
app.get('/api/spdx', doc.getAll); // GET api/spdx
app.get('/api/spdx/:id', doc.getById); // GET api/spdx/{id}
app.put('/api/spdx/:id', doc.update);  // PUT api/spdx/{id}

// files
app.get('/api/files', file.getAll); // GET api/files
app.get('/api/files/:id', file.getById); // GET api/file/{id}

// packages
app.get('/api/packages', pack.getAll); // GET api/packages
app.get('/api/packages/:id', pack.getById); // GET api/packages/{id}

app.listen('3000');
console.log('Listening for connections on 3000');

