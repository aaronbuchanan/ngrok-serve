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
    verbose: exports._get('-v', false)
  };

  opts.legal =  new RegExp('^' + opts.dir);

  return opts;
};

exports._get = function(flag, item){
  item = typeof item === 'undefined' ? true : item;
  let loc = process.argv.indexOf(flag) + 1;
  if (item) {
    return loc ? process.argv[loc] : null;
  } else return !!loc;
};
