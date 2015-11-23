'use strict';

global.log = {
  _esc: new Buffer([27]).toString(),
  _head: function(name, color){
    return this._esc + '[3' + color + 'm[' + name + ']' + this._esc + '[0m';
  },

  ngrok: function(){
    console.log(this._head('ngrok', 2), ...arguments);
    return this;
  },

  http: function(){
    console.log(this._head('http', 4), ...arguments);
    return this;
  }
};

log.http('Hello world.');
