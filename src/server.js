const http = require('http');
const app = require('./app');
port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})