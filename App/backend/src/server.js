require('dotenv').config();

const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();

const http = require('http');
const { iniciarWebSocket } = require('./websocket/wsServer');

const server = http.createServer(app);

iniciarWebSocket(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});