const liveServer = require("live-server");
const path = require('path')
 
var params = {
    port: 9001,
    host: "0.0.0.0", 
    open: true,
    root: path.resolve(__dirname,'src'),
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);