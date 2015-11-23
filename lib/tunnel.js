'use strict';

const ngrok = require('ngrok');

/* tunnel.js
 * Manages the ngrok tunnel once the server is listening.
 */

module.exports = function(){
  ngrok.connect(opts.port, function(err, url){
    log.ngrok(err ? err : url);
  });
};

process.on('exit', function(){
  ngrok.disconnect();
});
