const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000; // where proj runs
const server = http.createServer(app);

server.listen(port); // start listening on this port
