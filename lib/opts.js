'use strict';

module.exports = function(args){
  return {
    port: this._get('-p') || 8080,
    dir: this._get('-d') || process.cwd()
  };
};

module.exports._get = function(flag){
  let loc = process.argv.indexOf(flag) + 1;
  return loc ? process.argv[loc] : null;
};
