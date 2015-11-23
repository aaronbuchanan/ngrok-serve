'use strict';

const mime = require('mime'),
      fs = require('fs'),
      path = require('path'),
      views = require('./views');

module.exports = function(req, res){
  req.dir = path.resolve(path.join(opts.dir, req.url));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (opts.verbose) {
    log.http('[' + req.headers['x-real-ip'] + '] ' + req.method + ': ' + req.dir);
  }

  if (!opts.legal.test(req.dir)) {
    res.statusCode = 403;
    res.end(views.error(403));
    return;
  }

  if (path.basename(req.dir)[0] === '.') {
    res.statusCode = 403;
    res.end(views.error(403));
    return;
  }


  fs.stat(req.dir, function(err, stats){
    if (err) {
      res.statusCode = 404;
      res.end(views.error(404));
      return;
    }

    // If it's a directory
    if (stats.isDirectory()) {
      fs.readdir(req.dir, function(err, files){
        if (err) {
          res.statusCode = 404;
          res.end(exports.error(404));
        } else res.end(views.dir(files, req.url));
      });
    }

    // If it's a file
    else if (stats.isFile()) {
      res.setHeader('Content-Type', mime.lookup(path.extname(req.url) || 'txt'));
      fs.readFile(req.dir, function(err, data){
        if (err) {
          res.statusCode = 404;
          res.end(views.error(404));
        } else res.end(data);
      });
    }

    // Unknown
    else {
      res.statusCode = 404;
      res.end(exports.error(404));
    }
  });
};
