const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('THIS IS APP OUTPUT (Node.js)\n');
}).listen(3000);
