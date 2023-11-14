const fs = require('fs');
const http = require('http');
const axios = require('axios');

fs.writeFile('./test.txt', 'aaa', function(err) {})

fs.readFile('./test.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
});

server.listen(8000, () => {
    console.log('Le serveur fonctionne sur http://localhost:8000');
});

axios.get('http://www.google.com/')
    .then(response => {
        fs.writeFile('google.html', response.data, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    })
    .catch(error => {
        console.log(error);
    });