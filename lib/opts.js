'use strict';

const fs = require('fs'),
      path = require('path');

/* opts.js
 * Gets options.
 */

module.exports = exports = function(){
  let opts = {
    port: parseInt(exports._get('-p')) || 8080,
    dir: exports._get('-d') || process.cwd(),
  };

  opts.legal =  new RegExp('^' + opts.dir);

  return opts;
};

exports._get = function(flag){
  let loc = process.argv.indexOf(flag) + 1;
  return loc ? process.argv[loc] : null;
};
