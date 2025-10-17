const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(`Olá, to ouvindo! a hora e data atuais sao... ${new Date().toString()}`);
    res.end();
})

server.listen(port);
console.log("rodando em: ", port);