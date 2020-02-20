const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const secrets = require('../config/secrets');
const router = require('express').Router();

// POST /api/auth/register
router.post('/register', (req,res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(added => {
        res.status(201).json(added);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});