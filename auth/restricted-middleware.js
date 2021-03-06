const secrets = require('../config/secrets');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'Nope try again'})
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({message: 'Nope try again'})
    }
};