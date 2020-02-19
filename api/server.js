const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const = require('');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use();

server.get('/', (req,res) => {
    res.send('<h1>Welcome to the Miley\'s API</h1>')
});

module.exports = server;