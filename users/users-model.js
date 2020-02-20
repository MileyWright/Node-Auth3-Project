const db = require('../database/dbConfig');

module.exports = {
    add,
    find, 
    findBy,
    findById,
    findDept
}

function add(user) {
    return db('users')
    .insert(user)
}

function find() {
    return db('users')
    .select('id', 'username', 'password', 'department')
}

function findBy(filter) {
    return db('user')
    .where(filter);
}

function findById(id) {
    return db('users')
    .where({id})
}

function findDept(department) {
    return db('users')
    .select('id', 'username', 'department')
    .where({department})
}