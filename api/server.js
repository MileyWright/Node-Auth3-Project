const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const userRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

server.get('/', (req,res) => {
    res.send('<h1>Welcome to the Miley\'s API</h1>')
});

module.exports = server;