const router = require('express').Router();
const Users = require('./users-model');
// const restricted = require('../auth/restricted-middleware.js');


router.get('/', (req,res) => {
    User.find()
        .then(user => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

//GET auth/users/dept
router.get('/dept', (req, res) => {

})

module.exports = router;