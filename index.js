#!/usr/bin/env node
'use strict';

const http = require('http'),
      lib = require('./lib');

/* index.js
 * Creates http server and connects ngrok.
 */

// Get options, and set to a global var.
global.opts = lib.opts(process.argv);
global.log = lib.log(); http

// Create HTTP server.
.createServer(lib.request)

// Create ngrok tunnel when listening.
.listen(opts.port, lib.tunnel);
