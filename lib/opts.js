'use strict';

module.exports = exports = function(){
  return {
    port: parseInt(exports._get('-p')) || 8080,
    dir: exports._get('-d') || process.cwd(),
    legal: new RegExp('^' + exports._get('-d'))
  };
};

exports._get = function(flag){
  let loc = process.argv.indexOf(flag) + 1;
  return loc ? process.argv[loc] : null;
};
