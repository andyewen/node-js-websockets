const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');

const app = express()
app.use(express.static('static'));
app.use(bodyParser.text());

app.post('/', (req, res) => {
    wss.broadcast(req.body);
    res.send();
});

const server = http.createServer(app);

const wss = new WebSocket.Server({server});
wss.broadcast = function(data) {
    for (let client of this.clients) {
        if (client.readyState == WebSocket.OPEN) {
            client.send(data)
        }
    }
}

server.listen(3000);
console.log('HTTP server started...');
