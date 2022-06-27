import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is your server :)');
});

server.listen(port, () => {
    console.log(`Server running in http://localhost:${port}/`);
});