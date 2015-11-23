'use strict';

const ngrok = require('ngrok');

/* tunnel.js
 * Manages the ngrok tunnel once the server is listening.
 */

module.exports = function(){
  log.http('created localhost server on ' + opts.port);

  log.ngrok('creating tunnel...');
  ngrok.connect(opts.port, function(err, url){
    log.ngrok(err ? err : 'connected: ' + url);
  });
};

process.on('exit', function(){
  ngrok.disconnect();
});
