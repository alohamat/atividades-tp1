const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    a = Math.random();
    b = Math.random();
    res.write(a + " + " + b + " = " + parseFloat(a + b));
    res.end();
})

server.listen(port);
console.log(`rodando na porta: ${port}`);
