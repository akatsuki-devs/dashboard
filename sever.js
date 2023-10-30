const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express()
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const APP_PORT = process.env.PORT || 9000;
const APP_URL = process.env.URL || `http://localhost:${APP_PORT}`;

server.listen(APP_PORT, () => {
    console.log(`Servidor WebSocket em execução na porta ${APP_PORT}`);
});