var http = require('http');
var formidable = require('formidable');
var spawn = require('child_process').spawn;

exports.upload = function (req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad request: expecting multipart/form-data');
        return;
    }
    
    var form = new formidable.IncomingForm();
    // upload into do_spdx folder
    form.uploadDir = "./do_spdx";
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files);
        res.end('upload complete!');
    });
}

// displays a html page form uploading a document to test
exports.testUpload = function (req, res) {
    var html = ''
        + '<form method="post" action="/api/scan" enctype="multipart/form-data">'
        + '<p><input type="text" name="name" /></p>'
        + '<p><input type="file" name="file" /></p>'
        + '<p><input type="submit" name="Upload" /></p>'
        + '</form>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

// tests spawning a child process
exports.testSpawn = function (req, res) {
    var ls = spawn('ls', ['-lh', '/usr']);

    ls.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    
    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    
    ls.on('close', function (code) {
      console.log('child process exited with code ' + code);
    });
    
    res.send('success');
}

function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}