'use strict';

const fs = require('fs'),
      http = require('http'),
      path = require('path');

module.exports = exports = {};

exports.views = {
  error: fs.readFileSync(__dirname + '/../views/error.html').toString(),
  dir: fs.readFileSync(__dirname + '/../views/dir.html').toString(),
};

exports.charMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;'
};

exports.escape = function(string){
  return String(string).replace(/[&<>''\/]/g, function (s) {
    return exports.charMap[s];
  });
};

exports.error = function(code){
  let result = exports.views.error;
  result = result.replace(/@code/g, code || 404);
  result = result.replace(/@name/g, http.STATUS_CODES[code || 404]);
  return result;
};

exports.dir = function(files, dir){
  let rendered = '';
  files.forEach(function(file){
    if (file[0] === '.') return;

    rendered += '<div class="line"><a href="' + path.join(dir, file) + '">' + exports.escape(file) + '</a></div>';
  });

  let result = exports.views.dir;
  result = result.replace(/@dir/g, exports.escape(dir));
  result = result.replace(/@files/g, rendered);
  return result;
};
