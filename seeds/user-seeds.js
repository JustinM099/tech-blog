const { User } = require('../models')


const userData = [
    {
        name: 'John Johnson',
        email: 'john@johnjohnson.com',
        password: 'password12345',
    },
    {
        name: 'Sally Johnson',
        email: 'sally@johnjohnson.com',
        password: 'password12345',
    },
    {
        name: 'Bobby Johnson',
        email: 'bobby@johnjohnson.com',
        password: 'password12345',
    },
    {
        name: 'Lucay Johnson',
        email: 'lucy@johnjohnson.com',
        password: 'password12345',
    },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;