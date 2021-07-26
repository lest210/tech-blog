const { User } = require('../models');

const userData = [
    {
        username: "martin_bour",
        twitter: "martinb",
        github: "martinb",
        email: "martin_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shaun_c",
        twitter: "shaun",
        github: "shaun",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "richard_johnson",
        twitter: "richard123",
        github: "rjohnson",
        email: "r_johnson@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "billy joe",
        twitter: "bill_joe",
        github: "billy",
        email: "bjoe@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;